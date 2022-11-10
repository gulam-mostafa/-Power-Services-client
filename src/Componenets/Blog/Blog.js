import React from 'react';
import { Link } from 'react-router-dom';
import { useTitleDi } from '../../hooks/useTitleDi';

const Blog = () => {
    useTitleDi('Blog')
    return (
        <div className="my-3 w-10/12 m-auto text-xl ">

            <div >

                <div className="card border border-blue-500 px-2 mx-2">
                    <h1 className="text-center text-pink-400"> Difference between SQL and NoSQL?</h1>
                    <h4>
                         <span className='text-orange-500'>SQL:</span> <br />
                        SQL or the Structured Query Language is the most common and popular programming language for the relational database management system. It is a language designed to extract, store, insert, delete, update and manage data for structured data and strategic analysis.

                         is widely used by top tech companies like Facebook, Whatsapp, etc for data processing solutions. It is used for different types of RDBMS including Oracle, MySQL, SQLServer, etc.
                    </h4>
                    <h4>
                    <span className='text-orange-500'>NoSQL:</span> <br />
                        NoSQL database provides a mechanism for storage and retrieval of data that is modelled other than tabular form. It was introduced by Carl Stroz in the year 1998 called a Non-relational database. Now, it stands for Not only SQL. It is not limited to storing data in tables, instead, enables the big data to be stored in the structured, unstructured, semi-structured or polymorphic form.
                    </h4>
                </div>
                <div className="card p-2 my-2 border border-blue-500">
                    <h1 className="text-center text-warning">
                        {" "}
                        What is JWT, and how does it work?
                    </h1>
                    <h4>
                        Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.
                    </h4> <br /> <br />
                    <h1 className="text-center text-warning">
                        {" "}

                    </h1>
                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                    A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                </div>
                <div className="card p-2 my-2 border border-blue-500">
                    <h1 className="text-center text-warning">
                        {" "}
                        How does NodeJS handle multiple requests at the same time?
                    </h1>
                    <h4>
                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                    </h4>
                </div>
                <div className="card p-2 my-2 border border-blue-500">
                    <h1 className="text-center text-warning">
                        {" "}
                        What is the difference between javascript and NodeJS?
                    </h1>
                    <h4>
                        1. NodeJS :
                        NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development
<br /> <br />

                    </h4>
                    <h5 className='text-white'>
                        2. JavaScript :
                        Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.

                        Difference between Nodejs and JavaScript :
                    </h5>
                </div>
            </div>

        </div>
    );
};

export default Blog;