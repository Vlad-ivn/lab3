const dictionary = {
    "герць": "двобій, поєдинок",
    "бузувір": "релігійно нетерпима людина, запеклий фанатик",
    "притичина": "перешкода або пригода",
    "перебендя": "людина, яка вміє дотепно розповідати. Також так називали вередливу особу",
    "лават": "волошка. Ще так називали шовкову тканину блакитного кольору",
    "ринва": "труба, жолоб для дощової води",
    "гевал": "незграбна чи некультурна людина",
    "свічадо": "дзеркало або підвісний свічник",
    "кавалок": "шматок чогось. Це слово часом вживають у розмовній мові",
    "легіт": "легкий приємний вітерець."
};

const form = document.querySelector(".registration-form");
const input = document.querySelector(".enter__text");
const wordMeaning = document.querySelector(".word__meaning");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputValue = input.value.trim(); 

    if (inputValue === "") {
        wordMeaning.textContent = "Поле вводу порожнє";
        return;
    }

    if (!isNaN(inputValue)) { 
        wordMeaning.textContent = "Будь ласка, введіть слово, а не число";
        return;
    }

    const lowerCaseInput = inputValue.toLowerCase();  

    if (dictionary.hasOwnProperty(lowerCaseInput)) { 
        wordMeaning.textContent = `${lowerCaseInput}` + ' - це ' + dictionary[lowerCaseInput];
    } else {
        wordMeaning.textContent = "Слово не знайдено, спробуйте наступні: легіт, кавалок, свічадо, гевал, ринва, лават, перебендя, притичина, бузувір";
    }

    input.value = ""; 
});        


    
