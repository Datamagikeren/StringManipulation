function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function capitalizeLastLetter(word) {
    let lastLetter = word.charAt(word.length - 1);
    let capitalizedLastLetter = lastLetter.toUpperCase();
    return word.slice(0, word.length - 1) + capitalizedLastLetter;
}

function reverseString(word) {
    return word.split("").reverse().join("");
}

Vue.createApp({
    data() {
        return {
            word: null,
            uppercaseWord: null,
            lowercaseWord: null,
            capitalizedWord: null,
            endCapitalizedWord: null,
            capitalizedWord: null,
            reversedWord: null,
            words: [],
            showMessage: false,
            message: 'Insert any word, and see the magic happen!',
        }
    },

    methods: {
        stringManipulate() {
           
            this.message = "Can't manipulate an empty array of strings, sorry :("
            this.words.length = 0;
            
            this.uppercaseWord = this.word.toUpperCase();
            this.lowercaseWord = this.word.toLowerCase();
            this.capitalizedWord = capitalizeFirstLetter(this.word);
            this.endCapitalizedWord = capitalizeLastLetter(this.word);
            this.reversedWord = reverseString(this.word);
            
           
            this.words.push(
                this.word,
                this.uppercaseWord,
                this.lowercaseWord,
                this.capitalizedWord,
                this.endCapitalizedWord,
                this.reversedWord)

                if (this.word = null){
                   
                    return;
                }
                
            

        }
    },
}).mount("#app")
