import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blog-posts'>
            <div className='context-api blog'>
                <h2>What is the Purpose of Context API?</h2>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </div>
            <div className='semantic-tag blog'>
                <h2>What is semantic Tag?</h2>
                <p>Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a Paragraph tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.
                it's easier for both people and machines to read and understand it. Making applications accessible not only ensures equal access for people with disabilities, but also benefits people without disabilities by allowing them to customize their experiences.
                </p>
            </div>
            <div className='inline-block blog'>
                <h2>what is the difference between inline block and an inline block element?</h2>
                <p>inline The element doesn't start on a new line and only occupy just the width it requires. You can't set the width or height. inline-block It's formatted just like the inline element, where it doesn't start on a new line. BUT, you can set width and height values.
                inline, the major difference is that display: inline-block allows to set a width and height on the element.
                Also, with display: inline-block , the top and bottom margins/paddings are respected, but with display: inline they are not.
                </p>
            </div>
        </div>
    );
};

export default Blogs;