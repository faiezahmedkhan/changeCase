import React,{useState} from 'react'



const TextForm = (props) => {

    const handelclick = () =>{
        console.log('UpperCase Was Clicked');
        let newText = text.toUpperCase();
        setText(newText);

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
        
               <button className='btn btn-success' onClick={handelclick}>Convert to Uppercase</button>      

    </>
  )
}

export default TextForm;