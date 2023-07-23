const root = ReactDOM.createRoot(document.getElementById('root'));

const h1 = React.createElement('h1', {}, "Hello World!");
root.render(h1);

// Say I wanna render Child Elements

{/* <div id="parent">
    <div id="child">
        <h1>Hello World from React</h1>
    </div>
</div>  */}

const parent = React.createElement(
    'div', 
    {
        id: 'parent'
    },
    React.createElement(
        'div',
        {
            id: 'child'
        },
        React.createElement('h1', {}, "Hello World from React")
    )
);

root.render(parent);

// What if I wanna create Sibling Elements ?

{/* <div id="parent">
    <div id="child">
        <h1>Hello World from React</h1>
        <h1>I am Apurba</h1>
    </div>
</div>  */}

const elements = React.createElement(
    'div',
    {
        id: 'parent'
    },
    React.createElement(
        'div',
        {
            id: 'child'
        },
        [
            React.createElement('h1', {}, "Hello World from React!"),
            React.createElement('h1', {}, "I am Apurba")
        ]
    )
);

root.render(elements);