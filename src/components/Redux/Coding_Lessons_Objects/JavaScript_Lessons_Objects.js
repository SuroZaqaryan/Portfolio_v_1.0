import React from "react";
import jsStyle from "./css/JavasCript_Lesson.module.css";
import {faDotCircle} from "@fortawesome/free-solid-svg-icons/faDotCircle";
import Alert from "./Img/Examples/Screenshot_1.png";
import StringExample from "./Img/Examples/Screenshot_3.png";
import StringsList from "./Img/Examples/StringsList.jpg";
import "./css/CodingExamples.css";
import "./css/bbc.css"

function JavaScriptLessonObject() {
    const one = "Robby ";
    return (
        [
            {
                title: [<div><p className={jsStyle.title}>Overview</p></div>],
            },

            {
                titleName: "Indorction",
                heading: 'What is JavaScript ?',
                iconName: faDotCircle,
                data: {
                    description: `
                    
                    <p class="con"> JavaScript is a dynamic computer programming language.
                    It is lightweight and most commonly
                    used as a part of web pages, whose implementations
                    allow client-side script to interact with the user and make dynamic pages.
                    It is an interpreted programming language with object-oriented capabilities.</p>

                    <br class="br_description" />

                    
                    <p class="con"> JavaScript was first known as <b class="hal">LiveScript</b>, but Netscape changed its name to JavaScript,
                    possibly because of the excitement being generated by Java.
                    JavaScript made its first appearance in Netscape 2.0 in 1995 with the name <b class="hal">LiveScript</b>.
                    The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.
                    </p>

                    <br class="br_description" />

                    <h2 class="title_description">Client-Side JavaScript</h2>

                    <p class="con"> Client-side JavaScript is the most common form of the language. The script should be included in or
                    referenced by an HTML document for the code to be interpreted by the browser.
                    It means that a web page need not be a static HTML, but can include programs that interact with the user,
                    control the browser, and dynamically create HTML content.</p> 

                    <br class="br_description" />

                    <p class="con"> The JavaScript client-side mechanism provides many advantages over traditional CGI server-side scripts.
                    For example, you might use JavaScript to check if the user has entered a valid e-mail address in a form field.</p>

                    <br class="br_description" />

                    <p class="con"> The JavaScript code is executed when the user submits the form,
                    and only if all the entries are valid, they would be submitted to the Web Server.
                    JavaScript can be used to trap user-initiated events such as button clicks,
                    link navigation, and other actions that the user initiates explicitly or implicitly.</p>

                    <h2 class="title_description">JavaScript Development Tools</h2>

                    <p class="con"> One of major strengths of JavaScript is that it does not require expensive development tools.
                    You can start with a simple text editor such as Notepad.
                    Since it is an interpreted language inside the context of a web browser,
                    you don't even need to buy a compiler.</p>

                    <br class="br_description" />

                    <p class="con"> To make our life simpler, various vendors have come up with very nice JavaScript editing tools.
                    Some of them are listed here − </p>
                    
                    <ul class="js_ul_list">
                        <li> <b class="hal">Microsoft FrontPage − </b> Microsoft has developed a popular HTML editor called FrontPage.
                        FrontPage also provides web developers with a number of
                        JavaScript tools to assist in the creation of interactive websites.</li>
                        
                        <li> <b class="hal">Macromedia Dreamweaver MX − </b> Macromedia Dreamweaver MX is a very popular HTML
                        and JavaScript editor in the professional web development crowd.
                        It provides several handy prebuilt JavaScript components,
                        integrates well with databases, and conforms to new standards such as XHTML and XML.</li>

                        <li> <b class="hal">Macromedia HomeSite 5 − </b> HomeSite 5 is a well-liked HTML
                        and JavaScript editor from Macromedia that can
                        be used to manage personal websites effectively.</li>
                    </ul>
                    
                    <h2 class="title_description">Where is JavaScript Today ?</h2>
                    
                    <p class="con"> The ECMAScript Edition 5 standard will be the first update to be released in over four years.
                    JavaScript 2.0 conforms to Edition 5 of the ECMAScript standard, and the difference between the two is extremely minor.
                    The specification for JavaScript 2.0 can be found on the following site: </p> 
                    <a class="link_description" target="_blank" href="http://www.ecma-international.org/ecma-262/6.0/">http://www.ecmascript.org/</a>
                    
                    <br class="br_description" />
                    
                    <p class="con"> Today, Netscape's JavaScript and Microsoft's JScript conform to the ECMAScript standard,
                    although both the languages still support the features that are not a part of the standard. </p>
                    
                    `
                },
            },

            {
                titleName: "Creating Your First JavaScript",
                heading: 'Ready. Set. JavaScript! 🎉',
                iconName: faDotCircle,
                data: {
                    description: `
                    <p class="con">
                    Let’s start with the basics and add some JavaScript to a webpage. On the web, JavaScript code lives inside the <b class="hal">HTML</b> document,
                    and needs to be enclosed by <span class="content_code_example"> &lt;script&gt; ... &lt;/script&gt; </span> </p>
                    
                    </div>

                    <div class="code_syntax_warning">
<div class="code_syntax">
<pre class='code code-javascript'><label>JS</label><code>
&lt;script&gt;
function myFunction() {
    document.write(5 + 6);
}
&lt;/script&gt;</code></pre>
</div>

                    <div class="warning_data_content">
                        <div class="warning">
                            <p class="warning_title">Heads up!<p>
                            <p class="warning_description">You can put the script tag anywhere in the HTML document.</p>
                        </div>
                    </div>
                    
                    <div class="inside_Content_Description">
                        <h2 class="title_description">Output</h2>
                    <div>
                    
                    <div>
                        <p class="con">Let's use JavaScript to print "Hello World" to the browser. This is what that would look like.</p>
                    </div>
                    
                    </div>
<div class="code_syntax">
<pre class='code code-javascript'><label>JS</label><code>
&lt;script&gt;
    document.write("Hello World!");
&lt;/script&gt;</code></pre>
</div>

                    <div>
                        <p class="con">
                        Notice some extra stuff there? Nothing gets past you!
                        <br class="br_description" />
                        Time to introduce the <b class="hal">document.write()</b> function. This is what we need to use to write text into our HTML document.
                        <br class="br_description" />
                        Hit "try it yourself" and give it a go!
                        Feeling fancy? Of course you are! You can also use standard HTML markup language to customize the appearance text in the output:
                        </p>                      
                    </div>
                    
<div class="code_syntax">
<pre class='code code-javascript'><label>JS</label><code>
&lt;script&gt; 
    document.write("&lt;h1&gt;Hello World!&lt;h1&gt;");
&lt;/script&gt;</code></pre>
</div>

                    <div class="inside_Content_Description">
                        <h2 class="title_description">Output to console</h2>
                    <div>

                    <div>
                    <p class="con">
                    Right, we’re now experts in writing HTML output with document.write().
                    Time for a different type of output. Let’s learn about output to the browser console.

                    <br class="br_description" />
                    For this we’ll be needing the trusty <b class="hal">console.log()</b> function.

                    <br class="br_description" />
                    Wait, not so fast! What’s this console we’re talking about?
                    The console is part of the web browser and allows you to log messages, run JavaScript code, and see errors and warnings.
                    </p>                      
                </div>

                <div>
                    <h3 class="title_code_example">It looks like this:</h3>
                </div>

<div class="code_syntax">
<pre class='code code-javascript'><label>JS</label><code  style="padding: 0px 0px 14px">
    console.log("Hello from console");
</code></pre>

                <div>
                    <p class="con">
                        Hit "try it yourself" and give it a go!
                    </p>
                </div>

                <div class="warning_data_content">
                <div class="warning">
                    <p class="warning_title">Heads up!<p>
                    <p class="warning_description">Devs mostly use the console to test their JavaScript code.
                    </p>
                </div>
                </div>

                <div class="inside_Content_Description">
                    <h2 class="title_description">Output to console</h2>
                <div>

                <div>
                <p class="con">
                        Great stuff! You’ll soon be a variable master.
                    <br class="br_description" />
                    Ok, let’s talk about <b class="hal">comments</b> in JavaScript.
                    So we know about statements, these are the instructions within our program that get "executed" when the program runs.
                    But! Not all JavaScript statements are "executed".
                    Any code after a double slash //, or between /* and */, is treated as a  <b class="hal">comment</b>, and will be ignored, and not executed.
                    <br class="br_description" />
                    To write a <b class="hal">Single line</b> comment we use double slashes. Like this:
                </p>

<div class="code_syntax">
<pre class='code code-javascript'><label>JS</label><code  style="padding: 0px 0px 14px">
   alert("This is an Alert box!");
</code></pre>

                    <div>
                        <h3 class="title_code_example">Result:</h3>
                    </div>

                    <div>
                        <img class="code_example" src=${Alert} />    
                    </div>

                </div>
                 `
                },
            },

            {
                titleName: "Comments",
                heading: 'JavaScript Comments 📒',
                iconName: faDotCircle,
                data: {
                    description: `
                        <div>
                            <div>
                                <h3 class="title_code_example">It looks like this:</h3>
                            </div>

                            <p class="con">
                                If we want to create a  <b class="hal">multi-line comment,</b> we write it between /*and */
                                <b class="hal">Like this:</b>
                            </p>

<div class="code_syntax">
<pre class='code code-javascript'><label>JS</label><code  style="padding: 0px 0px 14px">
    /* This code
        creates an
        alert box */
        alert("This is an Alert box!");
</code></pre>
</div>

                            <p class="con">
                                Hit <b class="hal">"try it yourself"</b> and give it a go!
                            </p>

                            <div class="warning_data_content">
                                <div class="warning">
                                    <p class="warning_title">Heads up!<p>
                                    <p class="warning_description">
                                        We use comments to describe and explain what the code is doing.
                                    </p>
                                </div>
                            </div>

                            <div class="inside_Content_Description">
                                <h2 class="title_description">
                                    Single Line Comments
                                </h2>
                            <div>

                            <p class="con">

                            Single line comments start with <b class="hal">// .</b>

                            <br class="br_description" />

                            Any text between <b class="hal">// .</b> and the end of the line will be ignored by JavaScript (will not be executed).

                            <br class="br_description" />

                            This example uses a single-line comment before each code line:

                            </p>

<div class="code_syntax">
<pre class='code code-javascript'><label>JS</label><code  style="padding: 0px 0px 14px">
    // Change heading:
    document.getElementById("myH").innerHTML = "My First Page";

    // Change paragraph:
    document.getElementById("myP").innerHTML = "My first paragraph.";
</pre>
</div>
                        </div>
                    `
                },
            },

            {
                titleName: "Variables",
                heading: 'JavaScript Variables 📦',
                iconName: faDotCircle,
                data: {
                    description: `
                        <div>
                            <p class="con">
                                <b class="hal">Variables </b> are containers for storing data values. The value of a variable can
                                change throughout the program.

                                <br class="br_description" />
                                Declaring a variable is as simple as using the keyword <b class="hal">var</b>. Which would look like this:
                            </p>

<div class="code_syntax">
<pre class='code code-javascript'><label>JS</label><code  style="padding: 0px 0px 14px">
    var x = 10;
</pre>
</div>

                            <p class="con">

                            In this example we’ve assigned a value of 10 to the variable <b class="hal">x.</b>

                            <br class="br_description" />
                            
                            We’ve used the word assigned deliberately here, because in JavaScript,
                            the equal sign <b class="hal">(=)</b> is actually called the <b class="hal">"assignment"</b> operator,
                            rather than an "equal to" operator.

                            <br class="br_description" />

                            Which means that in JavaScript, <b class="hal">x = y</b> will assign the value of y to <b class="hal">x</b> variable.

                            </p>
                            
                            <div class="warning_data_content">
                                <div class="warning">
                                    <p class="warning_title">Heads up!<p>
                                    <p class="warning_description">
                                        JavaScript is sensitive, case sensitive that is. So variables like lastName and lastname are not the same.
                                    </p>
                                </div>
                            </div>

                        <div class="inside_Content_Description">
                            <h2 class="title_description">
                                Using Variables
                            </h2>
                        <div>

                    <p class="con">
                        Ok, let’s put some of what we’ve learned together!

                        <br class="br_description" />

                        How about we assign a value to a variable and output it to the browser. We’ve got this!
                    </p>

<div class="code_syntax">
<pre class='code code-javascript'><label>JS</label><code  style="padding: 0px 0px 14px">
    var x = 10;
    document.write(x);
</pre>
</div>

                    <p class="con">
                        Hit <b class="hal">Hit <b class="hal">(=)</b>  and give it a go!</b> and give it a go!

                        <br class="br_description" />

                        But what’s the point of variables anyway? Well, imagine your program has 1000 lines of code that include the variable x.
                        With variables you can change the value of the variables and use them multiple times in your code:
                    </p>

<div class="code_syntax">
<pre class='code code-javascript'><label>JS</label><code  style="padding: 0px 0px 14px">
    var x = 100;
    console.log(x);

    x = 42;
    console.log(x);
</pre>
</div>

                    <p class="con">
                       Hit <b class="hal">"try it yourself"</b> and give it a go!
                     </p>

                    <div class="warning_data_content">
                        <div class="warning">
                            <p class="warning_title">Heads up!<p>
                            <p class="warning_description">
                                Every written <b class="hal">"instruction"</b> is called a statement. JavaScript statements are separated by semicolons.
                            </p>
                        </div>
                    </div>

                <div class="inside_Content_Description">
                    <h2 class="title_description">
                        Naming Variables
                    </h2>
               <div>

               <p class="con">
               Let’s talk about names.
               <br class="br_description" />
                It’s super important to remember that JavaScript variable names are case-sensitive.
                </p>

                <br class="br_description" />

                <p class="con">
                    What do you think the output of the following code would be?
                 </p>

<div class="code_syntax">
<pre class='code code-javascript'><label>JS</label><code  style="padding: 0px 0px 14px">
    var x = 100;
    document.write(X);
</pre>
</div>

                    <div>
                        <div>
                            <p class="con">
                                That’s right! Absolutely nothing. That’s because x and X are two different variables.

                                <br class="br_description" />

                                Hit <b class="hal">"try it yourself"</b> and give it a go!              
                            </p>
                        </div>

                        <br class="br_description" />

                        <div>
                            <p style="line-height: 1.7" class="con">
                            Brace yourself for more rules!
                            - The first character of a variable name <b class="hal">must be</b> a letter, underscore (_), or a dollar sign ($) (Subsequent characters can be letters, digits, underscores, or dollar signs).
                            <br />
                            - The first character of a variable name can’t be a number.
                            <br />
                            - Variable names <b class="hal">can’t</b> include a <b class="hal">mathematical or logical operator</b> in their name. For instance, 2*something or this+that;
                            <br />
                            - Variable names <b class="hal">can’t contain spaces.</b> 
                            <br />
                            - You’re not allowed to use any special symbols, like my#num, num%, etc.
                            <br />
                            </p>
                        </div>
                    </div>

                    <div class="warning_data_content">
                    <div class="warning">
                        <p class="warning_title">Heads up!<p>
                        <p class="warning_description">
                            JavaScript is a hyphen free zone. They’re reserved for subtractions.
                        </p>
                    </div>
                </div>

                        </div>
                    `
                },
            },

            {
                titleName: "Data Types",
                heading: 'Data Types ⌨️',
                iconName: faDotCircle,
                data: {
                    description:
                    `
                    <div>
                    <p class="con">
                    The term <b class="hal">data type</b> refers to the types of values a program can work with.
                    The sky's the limit with JavaScript variables, which can hold a bunch of different data types–<b class="hal">numbers</b>,
                    <b class="hal">strings,</b> <b class="hal">arrays,</b>you name it.

                    <br class="br_description" />

                    Let's start simple though.
                    Numbers can be written with or without decimals. Like this:

<div class="code_syntax">
<pre class='code code-javascript'><label>JS</label><code  style="padding: 0px 0px 14px">
    var num = 42; // A number without decimals

    var price = 55.55;
    document.write(price);
</code></pre>
</div>

                Hit <b class="hal">"try it yourself"</b> and give it a go!
                
                </p>

                        <div class="warning_data_content">
                            <div class="warning">
                                <p class="warning_title">Heads up!<p>
                                <p class="warning_description">
                                    Changing this variable is a breeze, just assign to it any other data type value, like num = 'some random string'.
                                </p>
                            </div>
                        </div>

                        <h2 class="title_description">
                             Strings 📝
                        </h2>

                        <p class="con">
                            Ok, let’s turn up the heat...
                            In JavaScript we can use <b class="hal">strings</b> to store and manipulate text.
                            A string can be any text wrapped in <b class="hal">quotes.</b> Single or double quotes,
                            it doesn’t matter, so long as you’re consistent with them. Like this:
                        </p>

<div class="code_syntax">
<pre class='code code-javascript'><label>JS</label><code  style="padding: 0px 0px 14px">
    var name = 'John';
    var text = "My name is John Smith";
</code></pre>
</div>

                        <div>
                            <p class="con"> 
                                What if we want to use quotes inside a string though?? No problem! You can
                                use quotes inside a string, as long as they don't match the quotes enclosing the string itself. Take a look:
                            </p>
                        </div>

<div class="code_syntax">
<pre class='code code-javascript'><label>JS</label><code  style="padding: 0px 0px 14px">
    var text = "My name is 'John' ";
</code></pre>
</div>                       

                    <div class="warning_data_content">
                        <div class="warning">
                            <p class="warning_title">Heads up!<p>
                            <p class="warning_description">
                                You can get double quotes inside of double quotes using the escape character like this: \\" or \\' inside of single quotes.
                            </p>
                        </div>
                    </div>

                    <div>
                        <p class="con">  
                        Now is a good time to talk about the <b class="hal">backslash (\\) escape character.</b>
                        He comes to the rescue when you need to put quotes within strings (and a bunch of other situations) by transforming special characters into string characters.
                        </p>
                    </div>

                <div>
                    <h3 class="title_code_example">Take a look:</h3>
                </div>

<div class="code_syntax">
<pre class='code code-javascript'><label>JS</label><code  style="padding: 0px 0px 14px">
    var sayHello = 'Hello world! \'I am a JavaScript programmer.\' ';
    document.write(sayHello);
</code></pre>
</div>    

                <div>
                    <div>
                        <h3 class="title_code_example">Result:</h3>
                    </div>

                    <div>
                        <img class="code_example" src=${StringExample} />    
                    </div>
                </div>

                <div>
                    <div>
                        <p class="con"> 
                            But the escape character (\\) isn’t just for quotes, it works when you need to put other special characters inside strings too!
                        </p>
                    </div>

                    <div>
                        <img class="code_example StringList" src=${StringsList} />
                    </div>
                </div>
                
                <div class="warning_data_content">
                    <div class="warning">
                        <p class="warning_title">Heads up!<p>
                        <p class="warning_description">
                            If you start a string with a single quote, then you need to end it with a single quote too.
                            This applies to double quotes. Otherwise, JavaScript will get confused. Poor JavaScript.
                        </p>
                    </div>
                </div>

                <div>
                    <div>
                        <h2 class="title_description">
                        Booleans ➕➖
                        </h2>
                    </div>

                    <div>
                        <p class="con"> 
                            Not just fun to say, Booleans in JavaScript serve a useful function by leting you have one of two values,
                            either <b class="hal">true</b> or <b class="hal">false.</b>

                            <br class="br_description" />

                            So when you need a data type that can only have one of two possible values,
                            like Yes/No, on/off or true/false, look no further than Mr Boolean. Let’s look at an example:
                        </p>
                    </div>

                    <div>
<div class="code_syntax">
<pre class='code code-javascript'><label>JS</label><code  style="padding: 0px 0px 14px">
    var isActive = true; 
    var isHoliday = false;
</code></pre>
</div>    
                    </div>
                </div>
                <div class="warning_data_content">
                <div class="warning">
                    <p class="warning_title">Heads up!<p>
                    <p class="warning_description">
                    The Boolean value of 0 (zero), null, undefined, empty string is <b class="hal">false.</b>
                    Everything with a "real" value is <b class="hal">true.</b>
                    </p>
                </div>
            </div>

                    </div>
                    `
                },
            },

            {
                titleName: "JS Comments",
                iconName: faDotCircle,
                data: {
                    description: `
                        <p class="warning_description">You can put the script tag anywhere in the HTML document.4</p>
                    `
                },
            },

            {
                titleName: "JS Variables",
                iconName: faDotCircle,
                data: {
                    description: `
                        <p class="warning_description">You can put the script tag anywhere in the HTML document.</p>
                    `
                },
            },

            {
                title: [<span className={jsStyle.title}>Basic Concepts</span>],
            },

            {
                titleName: "JS Forms",
                iconName: faDotCircle,
                description: [
                    <span className="yourClass">{one}</span>,
                    ` advanced diverted domestic sex repeated bringing you old.`
                ],
            },

            {
                titleName: "Forms API",
                iconName: faDotCircle,
                description: [
                    <span className="yourClass">{one}</span>,
                    ` advanced diverted domestic sex repeated bringing you old.1`
                ],
            },

            {
                titleName: "JS Forms",
                iconName: faDotCircle,
                description: [
                    <span className="yourClass">{one}</span>,
                    ` advanced diverted domestic sex repeated bringing you old.`
                ],
            },

            {
                titleName: "Forms API",
                iconName: faDotCircle,
                description: [
                    <span className="yourClass">{one}</span>,
                    ` advanced diverted domestic sex repeated bringing you old.1`
                ],
            },

            {
                titleName: "JS Forms",
                iconName: faDotCircle,
                description: [
                    <span className="yourClass">{one}</span>,
                    ` advanced diverted domestic sex repeated bringing you old.`
                ],
            },

            {
                titleName: "Forms API",
                iconName: faDotCircle,
                description: [
                    <span className="yourClass">{one}</span>,
                    ` advanced diverted domestic sex repeated bringing you old.1`
                ],
            },

            {
                title: [<span className={jsStyle.title}>Conditionals and Loops</span>],
            },

            {
                titleName: "Object Definitions",
                iconName: faDotCircle,
                description: [
                    <span className="yourClass">{one}</span>,
                    ` advanced diverted domestic sex repeated bringing you old.1`
                ],
            },

            {
                titleName: "Object Properties",
                iconName: faDotCircle,
                description: [
                    <span className="yourClass">{one}</span>,
                    ` advanced diverted domestic sex repeated bringing you old.`
                ],
            },

            {
                titleName: "Object Methods",
                iconName: faDotCircle,
                description: [
                    <span className="yourClass">{one}</span>,
                    ` advanced diverted domestic sex repeated bringing you old.1`
                ],
            },

            {
                titleName: "Object Display",
                iconName: faDotCircle,
                description: [
                    <span className="yourClass">{one}</span>,
                    ` advanced diverted domestic sex repeated bringing you old.`
                ],
            },

            {
                titleName: "Object Accessors",
                iconName: faDotCircle,
                description: [
                    <span className="yourClass">{one}</span>,
                    ` advanced diverted domestic sex repeated bringing you old.1`
                ],
            },

            {
                titleName: "Object Constructors",
                iconName: faDotCircle,
                description: [
                    <span className="yourClass">{one}</span>,
                    ` advanced diverted domestic sex repeated bringing you old.`
                ],
            },

            {
                title: [<span className={jsStyle.title}>Functions</span>],
            },

            {
                titleName: "JS Events",
                iconName: faDotCircle,
                description: [
                    <span className="yourClass">{one}</span>,
                    ` advanced diverted domestic sex repeated bringing you old.1`
                ],
            },

            {
                titleName: "JS Strings",
                iconName: faDotCircle,
                description: [
                    <span className="yourClass">{one}</span>,
                    ` advanced diverted domestic sex repeated bringing you old.`
                ],
            },

            {
                titleName: "JS String Methods",
                iconName: faDotCircle,
                description: [
                    <span className="yourClass">{one}</span>,
                    ` advanced diverted domestic sex repeated bringing you old.1`
                ],
            },

            {
                title: [<span className={jsStyle.title}>Objects</span>],
            },

            {
                titleName: "JS Events",
                iconName: faDotCircle,
                description: [
                    <span className="yourClass">{one}</span>,
                    ` advanced diverted domestic sex repeated bringing you old.1`
                ],
            },

            {
                titleName: "JS Strings",
                iconName: faDotCircle,
                description: [
                    <span className="yourClass">{one}</span>,
                    ` advanced diverted domestic sex repeated bringing you old.`
                ],
            },

            {
                titleName: "JS String Methods",
                iconName: faDotCircle,
                description: [
                    <span className="yourClass">{one}</span>,
                    ` advanced diverted domestic sex repeated bringing you old.1`
                ],
            },

            {
                titleName: "JS Strings",
                iconName: faDotCircle,
                description: [
                    <span className="yourClass">{one}</span>,
                    ` advanced diverted domestic sex repeated bringing you old.`
                ],
            },

            {
                titleName: "JS String Methods",
                iconName: faDotCircle,
                description: [
                    <span className="yourClass">{one}</span>,
                    ` advanced diverted domestic sex repeated bringing you old.1`
                ],
            },

            {
                title: [<span className={jsStyle.title}>ECMAScript 6</span>],
            },

            {
                titleName: "JS Events",
                iconName: faDotCircle,
                description: [
                    <span className="yourClass">{one}</span>,
                    ` advanced diverted domestic sex repeated bringing you old.1`
                ],
            },

            {
                titleName: "JS Strings",
                iconName: faDotCircle,
                description: [
                    <span className="yourClass">{one}</span>,
                    ` advanced diverted domestic sex repeated bringing you old.`
                ],
            },

            {
                titleName: "JS String Methods",
                iconName: faDotCircle,
                description: [
                    <span className="yourClass">{one}</span>,
                    ` advanced diverted domestic sex repeated bringing you old.1`
                ],
            },

            {
                titleName: "JS Strings",
                iconName: faDotCircle,
                description: [
                    <span className="yourClass">{one}</span>,
                    ` advanced diverted domestic sex repeated bringing you old.`
                ],
            },

            {
                titleName: "JS String Methods",
                iconName: faDotCircle,
                description: [
                    <span className="yourClass">{one}</span>,
                    ` advanced diverted domestic sex repeated bringing you old.1`
                ],
            },

        ]
    );
}

export default JavaScriptLessonObject;