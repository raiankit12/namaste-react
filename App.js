// const heading= React.createElement(
//     "h1",{id:"heading"},"Hello from react js by ankit"
//     );

    const heading= React.createElement(
        "div",
        {id:"parent"},
       [ React.createElement("div",{id:"child"},
            [React.createElement("h2",{id:"h1"},"Hello i am h1"),
            React.createElement( "h1",{id:"h2"},"Hello i am h2")]
            ),
            React.createElement("div",{id:"child"},
            [React.createElement("h2",{id:"h1"},"Hello i am h1"),
            React.createElement( "h1",{id:"h2"},"Hello i am h2")]
            )]
            )
        
   const root= ReactDOM.createRoot(document.getElementById("root"));

   root.render(heading);
