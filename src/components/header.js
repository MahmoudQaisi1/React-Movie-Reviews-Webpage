import React, {useState} from "react";



export default function Header({search, title}){
    const [query, setQuery] = useState('');
    return(
        <div className="header">
            <h1>{title}</h1>
            <form
             onSubmit={e => {
                e.preventDefault();
                search(query);
            }}>
                <input 
                type="text"
                value={query}
                    onChange={e => {
                        setQuery(e.target.value);
                    }}
                />
                <button type="submit">Search</button>
            </form>

            
        </div>
    );
}