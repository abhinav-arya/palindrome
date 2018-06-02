
//Reverse a string - extend native Prototype
String.prototype.reverse = function()  {
  return Array.from(this).reverse().join("");
}

//Define a phrase object
function Phrase(content)  {
  this.content = content;

  //Returns processed content - lowercase switched content
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }

  //Returns boolean result for a palindrome check
  this.palindrome = function palindrome() {
    return (this.processedContent() === this.processedContent().reverse());
  }
}

//Prototype for Phrase
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  //Overriding processedContent to palindrome check for translation
  this.processedContent = function processedContent() {
    return this.translation.toLowerCase();
  }
}

//Prototyping Phrase to TranslatedPhrase
TranslatedPhrase.prototype = new Phrase();


//Timepass Practice - to add palindrome, to native method - String - Can be ignored - Call from node.js as - String.palindrome()
String.prototype.palindrome = function() {
  let caller = new Phrase(this);
  return caller.palindrome();
}
