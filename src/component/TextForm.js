import React,{useState} from 'react'



const TextForm = (props) => {

    const handelclick = () =>{
        console.log('UpperCase Was Clicked');
        let newText = text.toUpperCase();
        setText(newText);

    }

    const handelclicklower = () =>{
      console.log('UpperCase Was Clicked');
      let newText = text.toLowerCase();
      setText(newText);

  }


  const handelcear = () =>{
    let newText = '';
    setText(newText);

}

const handerCopy = () =>{
var text = document.getElementById("myBox")
  text.select()
  navigator.clipboard.writeText(text.value);

}

  const handelOnChange = (e) =>{
        setText(e.target.value);

    }

    const [text, setText] = useState('Enter text Here to Change Case');

  return (  
    
    <>  
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handelOnChange}  id="myBox" rows="8"></textarea>
                </div>
        
               <button className='btn btn-success mx-1' onClick={handelclick}>Convert to Uppercase</button>
               <button className='btn btn-success mx-1' onClick={handelclicklower}>Convert to Lowercase</button>
               <button className='btn btn-success mx-1' onClick={handelcear}>Clear</button>   
               <button className='btn btn-success mx-1' onClick={handerCopy}>Copy to Clipboard</button>   
          




               <div className="container my-4">
                <h1>Your Text Summery</h1>
                <p>{text.split(" ").length} words and {text.length}</p>
                <p>{0.888 *  text.split(" ").length} Minuts Read</p>

                <h2>Plain Text Here</h2>
                <p>{text}</p>

               </div> 

    </>
  )
}

export default TextForm;