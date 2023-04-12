import React, { useContext, useEffect } from 'react';
import Header from '../Header/header';
import './Blog.css';
import Accordion from 'react-bootstrap/Accordion';
import { Context } from '../../utilities/Context';

const Blog = () => {
    const [context, setContext] = useContext(Context);

    useEffect(() => {
        setContext("Blog");
    }, []);

    return (
        <div>
            <>
                <Header />
            </>
            <div className='change-layout'>
                <div className='blog-info'>
                    <h3 className='blog-title'>Question & Answer</h3>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>01. When you use contextAPI?</Accordion.Header>
                            <Accordion.Body>
                                <p>The main idea of using the context is to allow your components to access global data and re-render when that global data is changed. Context solves the props drilling problem: when you have to pass down props from parents to children.</p>
                                <p>You can hold inside the context:</p>
                                <p>
                                    <ul>
                                        <li>global state</li>
                                        <li>theme</li>
                                        <li>application configuration</li>
                                        <li>authenticated user name</li>
                                        <li>user settings</li>
                                        <li>preferred language</li>
                                        <li>a collection of services</li>
                                    </ul>
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>02. What is custom Hook?</Accordion.Header>
                            <Accordion.Body>
                                <p>Custom Hooks are functions. Usually, they start with the word “use”.
                                    Custom Hooks allow us to access the React ecosystem in terms of hooks, which means we have access to all the known hooks like useState, useMemo, useEffect, etc.</p>
                                <p>This mechanism enables the separation of logic and view.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>03. What is useRef and when to use?</Accordion.Header>
                            <Accordion.Body>
                                <p>useRef is one of the many built-in hooks provided by React. It is useful for persisting mutable data between component renders. There are a couple of specific uses cases for useRef and refs that I'd like to call out.</p>
                                <p>
                                    <ul>
                                        <li>Modifying a child DOM node outside of the typical React data flow.</li>
                                        <li>Treating the mutable object returned by useRef similar to an instance property</li>
                                    </ul>
                                </p>
                                <p>One way that the React documentation explains the reference returned from useRef is to think of the reference as a box or container. We are able to provide an initial value for the container via the initialValue param of useRef. Once a value is provided we can access the same object via the .current property. Let's take a closer look at the specific use cases for useRef and dive into some examples.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>04. What is useMemo and when to use?</Accordion.Header>
                            <Accordion.Body>
                                <p>The useMemo Hook in React is a performance optimization tool that allows you to memoize expensive computations and avoid unnecessary re-renders. When you use useMemo, you can calculate the value of a variable or function once and reuse it across multiple renders, rather than recalculating it every time your component re-renders.</p>
                                <p>This can significantly improve the performance of your application, particularly if you have complex or time-consuming computations that need to be done in your components.</p>
                                <p>It’s important to note that you should only use useMemo when you have expensive computations that need to be memoized. Using it for every value in your component can actually hurt performance, as useMemo itself has a small overhead.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Blog;
