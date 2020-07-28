import React, { useState, useEffect } from 'react'; 
import formSchema from '../validation/formSchema';

    // setting initial form state
    // should we add a checkbox form input to organize the new articles to an appropriate board? i.e. (category { research: false, personal: false, coding: false, })

    const initialNewArticle = {
        url: '', 
        title: '',
        author: '', 
        host: '', 
    }

    // will there be an error schema to adhere to? Checking to make sure a url is added?

    const initialInputErrors = {
        url: '',
    }

    const initialBtnDisable = true;

    // useEffect: Logic: If the form schema is valid, then set the disabled button to 'not disabled' 

const NewArticle = (props) => { 
    const [inputValue, setInputValue] = useState(initialNewArticle);
    const [inputErrors, setInputErrors] = useState(initialInputErrors); 
    // button state, disabled until a url of 5 characters is supplied by user 
    const [disabled, setDisabled] = useState(initialBtnDisable); 

    const onChange = (e) => {
        setInputValue({...inputValue, [e.target.name]: e.target.value});
    };

    useEffect(() => {
        formSchema.isValid(inputValue).then(valid => {
            setDisabled(!valid)
        })
    }, [inputValue]);

    return (
        <div>
            <h2>Add an Article</h2>
            
            <form className='articleForm'> 
            
            <label htmlFor='url'>url:</label>
            <input 
            type='text'
            name='url'
            placeholder='newarticle.com/info'
            value={inputValue.url}
            onChange={onChange}
            />
            <label htmlFor='title'>Title:</label>
            <input 
            type='text'
            name='title'
            placeholder='article title'
            value={inputValue.title}
            onChange={onChange}
            />
            <label htmlFor='author'>Author:</label>
            <input 
            type='text'
            name='author'
            placeholder='author name'
            value={inputValue.author}
            onChange={onChange}
            />
            <label htmlFor='host'>Host:</label>
            <input 
            type='text'
            name='host'
            placeholder='host'
            value={inputValue.host}
            onChange={onChange}
            />

            </form>

            <button disabled={disabled}>Submit</button>
        </div>
    )
}

export default NewArticle; 