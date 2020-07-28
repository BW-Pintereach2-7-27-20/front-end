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
        </div>
    )
}

export default NewArticle; 