import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight,faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Blog = () => {
    return (
        <div className='mt-20 lg:px-20 px-5 mb-10'>
            <div className='text-center mb-5 '>
                <h1 className='text-4xl font-bold underline underline-offset-8 text-[#0080ff]'>Welcome To Blog Section</h1>
            </div>
            
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                <FontAwesomeIcon className='mr-3' icon={faArrowRight}/> how does react work?
                </div>
                <div className="collapse-content"> 
                
                    <p><FontAwesomeIcon className='mr-3' icon={faCircleChevronRight}/>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
                </div>
                </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                <FontAwesomeIcon className='mr-3' icon={faArrowRight}/> what is difference between props and state in react?
                </div>
                <div className="collapse-content"> 
                
                    <p><FontAwesomeIcon className='mr-3' icon={faCircleChevronRight}/>Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
                </div>
                </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                <FontAwesomeIcon className='mr-3' icon={faArrowRight}/> What Is The Uses Of useEffect Hook without Data Load?
                </div>
                <div className="collapse-content"> 
                
                    <p><FontAwesomeIcon className='mr-3' icon={faCircleChevronRight}/>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed, and call it later after performing the DOM updates.
                    If you’re familiar with React class lifecycle methods, 
                    you can think of useEffect Hook as componentDidMount, 
                    componentDidUpdate, and componentWillUnmount combined.
                    </p>
                </div>
                </div>
        </div>
    );
};

export default Blog;