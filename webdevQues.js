// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: "Choose the correct HTML element for the largest heading:",
    answer: "h1",
    options: [
      "heading",
      "head",
      "h1",
      "h6"
    ]
  },
    {
    numb: 3,
    question: "How can you make a numbered list?",
    answer: "ol",
    options: [
      "ul",
      "list",
      "dl",
      "ol"
    ]
  },
    {
    numb: 4,
    question: "What is the correct HTML element for inserting a line break?",
    answer: "br",
    options: [
      "br",
      "lb",
      "break",
      "/n"
    ]
  },
    {
    numb: 5,
    question: "What is the font-size of the h1 heading tag?",
    answer: "2 em",
    options: [
      "3.5 em",
      "2.17 em",
      "2 em",
      "	1.5 em"
    ]
  },
    {
    numb: 6,
    question: "Who was the primary author of HTML?",
    answer: "Tim Berners-Lee",
    options: [
      "Brendan Eich",
      "Sabeer Bhatiya",
      "Google Inc.",
      "Tim Berners-Lee"
    ]
  },
    {
    numb: 7,
    question: "Which of the following attributes comes in handy when borders have to be put between groups of columns instead of every column?",
    answer: "Colgroup",
    options: [
      "Col",
      "Colgroup",
      "Rowspan",
      "Row"
    ]
  },
    {
    numb: 8,
    question: "Which of the following is valid colour code ?",
    answer: "#000000;",
    options: [
      "#000000;",
      "#0000000;",
      "#00000000;",
      "#000000000;"
    ]
  },
    {
    numb: 9,
    question: "Caption Tag in HTML ?",
    answer: "Both",
    options: [
      "display the Title for table at the top",
      "display the Title for table at the bottom",
      "Both",
      "None;"
    ]
  },
    {
    numb: 10,
    question: "DOM stands for",
    answer: "Document object model",
    options: [
      "Document Oriented model",
      "Document object model",
      "Data object model",
      "Data oriented model"
    ]
  },
    {
    numb: 11,
    question: "The href attribute in the link tag specifies the:",
    answer: "Destination of a link",
    options: [
      "Link",
      "Hypertext",
      "Destination of a link",
      "None of the above"
    ]
  },
    {
    numb: 12,
    question: "What are &lt;div&gt; tags used for?",
    answer: "To logically divide the document",
    options: [
      "To logically divide the document",
      "To logically divide the paragraphs",
      "To replace paragraphs. i.e. p tags",
      "To provide space between tables"
    ]
  },
    {
    numb: 13,
    question: "How can we resize the image?",
    answer: "Using height and width",
    options: [
      "Using size attribute",
      "Using resize attribute",
      "Using height and width",
      "Using rs attribute"
    ]
  },
    {
    numb: 14,
    question: "What are meta tags used for?",
    answer: "Store information usually relevant to browsers and search engines",
    options: [
      "Store information usually relevant to browsers and search engines",
      "Store information usually relevant to browsers",
      "Store information about search engines",
      "Store information about external links"
    ]
  },
    {
    numb: 15,
    question: "For frames in HTML, how do you specify the rest of the screen?",
    answer: "Using *",
    options: [
      "Using &",
      "Using $",
      "Using *",
      "Using #"
    ]
  },
  {

    numb: 16,
    question: "How can you created rounded corners using CSS3?",
    answer: "border-radius: 30px;",
    options: [
      "border[round]: 30px;",
      "corner-effect: round;",
      "border-radius: 30px;",
      "alpha-effect: round-corner;"
    ]
  },
    {
    numb: 17,
    question: "How to rotate objects using CSS3?",
    answer: "transform: rotate(30deg);",
    options: [
      "object-rotation: 30deg;",
      "transform: rotate(30deg);",
      "rotate-object: 30deg;",
      "transform: rotate-30deg-clockwise;"
    ]
  },
    {
    numb: 18,
    question: "How do you add a comment in a CSS file?",
    answer: "/*this is a comment*/",
    options: [
      "/*this is a comment*/",
      "//this is a comment//",
      "//this is a comment",
      "&lt;--this is a comment--&gt;"
    ]
  },
    {
    numb: 19,
    question: "What is the correct CSS syntax for making all the &lt;span&gt; elements bold?",
    answer: "span{font-weight:bold}",
    options: [
      "span{text-size:bold}",
      "span{font-weight:bold}",
      "span{text-weight:bold}",
      "span{text-font:bold}"
    ]
  },
    {
    numb: 20,
    question: "What property is used to change the text color of an element?",
    answer: "color:",
    options: [
      "fontcolor:",
      "textcolor:",
      "font-color:",
      "color:"
    ]
  },
    {
    numb: 21,
    question: "The # symbol specifies that the selector is?",
    answer: "id",
    options: [
      "id",
      "tag",
      "first",
      "class"
    ]
  },
    {
    numb: 22,
    question: "Which is the correct CSS syntax?",
    answer: "p{color:black;}",
    options: [
      "{p:color=black(p}",
      "p:color=black",
      "p{color:black;}",
      "{p;color:black}"
    ]
  },
    {
    numb: 23,
    question: "Which of the following would be used to create an ID called header which has a width of 750px, a height of 30px and the color of the text is black?",
    answer: "#header{height:30px;width:750px;color:black;",
    options: [
      ".header{height:30px;width:750px;color:black;",
      "#header{height:30px;width:750px;color:black;",
      ".header{height:30px;width:750px;text:black;",
      "#header{height:30px;width:750px;text:black;"
    ]
  },
    {
    numb: 24,
    question: "Which snippet of CSS is commonly used to center a website horizontally?",
    answer: "margin: 0 auto;",
    options: [
      "site-align: center",
      "margin: center;",
      "margin:  auto 0;",
      "margin: 0 auto;"
    ]
  },
    {
    numb: 25,
    question: "What is the correct Syntax for importing a stylesheet in CSS?",
    answer: "@import url(css/example.css);",
    options: [
      "@import url(css/example.css);",
      "@import-stylesheet url(css/example.css);",
      "import-css url(css/example.css);",
      "@import-style url(css/example.css);"
    ]
  },
    {
    numb: 26,
    question: `How do you insert padding so that it is:
    10 pixels at the top
    15 pixels at the bottom
    5 pixels at the right
    10 pixels to the left?`,
    answer: "padding 10px 5px 15px 10px;",
    options: [
      "padding 10px 15px 5px 10px;",
      "padding 15px 5px 10px 10px;",
      "padding 10px 5px 10px 15px;",
      "padding 10px 5px 15px 10px;"
    ]
  },
    {
    numb: 27,
    question: "Which property is used to change the background color?",
    answer: "background-color:",
    options: [
      "bgcolor:",
      "background-color:",
      "bg-color:",
      "b-color:"
    ]
  },
    {
    numb: 28,
    question: "How do you display hyperlinks without an underline?",
    answer: "a{text-decoration: none;}",
    options: [
      "a{decoration: no underline;}",
      "a{text-decoration: none;}",
      "a{hyperlink: no underline;}",
      "a{text-decoration: no underline;}"
    ]
  },
    {
    numb: 29,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheets",
    options: [
      "Computer Style Sheets",
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Custom Style Sheets"
    ]
  },
    {
    numb: 30,
    question: "What is the correct CSS syntax to change the font name?",
    answer: "font-family:",
    options: [
      "font-family:",
      "font:",
      "fontname:",
      "font-name:"
    ]
  },
];