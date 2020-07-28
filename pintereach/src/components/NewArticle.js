import React from 'react'; 

const NewArticle = () => { 

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



    return (
        <div>
            New articles will go here! 
            <h2>Add an Article</h2>
            
            <form className='articleForm'> 
            
            <label htmlFor='url'>url:</label>
            <input 
            type='text'
            name='url'
            placeholder='newarticle.com/info'
            />

            <label htmlFor='title'>Title:</label>
            <input 
            type='text'
            name='title'
            placeholder='article title'
            />

            <label htmlFor='author'>Author:</label>
            <input 
            type='text'
            name='author'
            placeholder='author name'
            />

            <label htmlFor='host'>Host:</label>
            <input 
            type='text'
            name='host'
            placeholder='host'
            />
            </form>
        </div>
    )
}

export default NewArticle; 