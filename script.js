async function translateWord() {
    let word = document.getElementById("wordInput").value.trim();
    let result = document.getElementById("result");

    if (word === "") {
        result.innerHTML = "اكتب كلمة أولاً";
        return;
    }

    result.innerHTML = "جاري الترجمة...";

    try {
        let response = await fetch(
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=ar|en`
        );

        let data = await response.json();

        result.innerHTML = data.responseData.translatedText;
    } catch (error) {
        result.innerHTML = "حدث خطأ في الترجمة";
    }
}