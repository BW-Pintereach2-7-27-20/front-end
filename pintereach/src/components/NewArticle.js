import React, { useState } from 'react'; 

    // setting initial form state
    // should we add a checkbox form input to organize the new articles to an appropriate board? i.e. (category { research: false, personal: false, coding: false, })

    const initialNewArticle = {
        url: '', 
        title: '',
        author: '', 
        host: '', 
    }

    // will there be an error schema to adhere to? Checking to make sure a url is added?

    const initialFormErrors = {
        url: '',
    }

const NewArticle = (props) => { 
    const [inputValue, setInputValue] = useState(initialNewArticle); 

    const onChange = (e) => {
        setInputValue({...inputValue, [e.target.name]: e.target.value});
    }

    return (
        <div>
            <h2>Add an Article</h2>
            
            <form className='articleForm'> 
            
            <label htmlFor='url'>url:</label>
            <input 
            type='text'
            name='url'
            placeholder='newarticle.com/info'
            onChange={onChange}
            />
            <label htmlFor='title'>Title:</label>
            <input 
            type='text'
            name='title'
            placeholder='article title'
            onChange={onChange}
            />
            <label htmlFor='author'>Author:</label>
            <input 
            type='text'
            name='author'
            placeholder='author name'
            onChange={onChange}
            />
            <label htmlFor='host'>Host:</label>
            <input 
            type='text'
            name='host'
            placeholder='host'
            onChange={onChange}
            />

            </form>

            <button>Submit</button>
        </div>
    )
}

export default NewArticle; 