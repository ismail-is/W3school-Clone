
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'

export default function Javascript() {
  return (
    <div>
        <div className="flex bg-[#17202A] ">
            <div className='ml-80 mt-7'>


                <h1 style={{ marginLeft: "50px", fontSize: '100px', fontWeight: '700' }}>JavaScript</h1>
                <p style={{ fontSize: '19px', margin: "25px", marginLeft: "5px" }}> The language for styl JavaScripting web pages</p>

                <button type="button" class="btn btn-primary" style={{ borderRadius: "30px", padding: "10px", width: "200px", marginLeft: "15px" }}> Video Tutorial</button><br />
                <button type="button" class="btn btn-secondary" style={{ borderRadius: "30px", padding: "10px", width: "200px", margin: "15px" }}> Video Tutorial</button><br />
                <button type="button" class="btn btn-success" style={{ borderRadius: "30px", padding: "10px", width: "200px", margin: "15px" }}>HTML REference</button><br />
                
            </div>

            <div className="mr-4 mt-[30px] mt-7 ">
                <Card style={{ width: '27rem' ,border:"50px solid #212F3D" }}>

                    <Card.Body>
                        <Card.Title>J.S Example:</Card.Title>
                        <Card.Text>
                           <h6>body</h6>
                           <span>
                           <p>..</p>
                           <p>.</p>
                           <p>.</p>
                           

                           



                           
                           </span>
                           

                        </Card.Text>
                        <button type="button" class="btn btn-success" style={{ borderRadius: "30px", padding: "10px", width: "200px", marginTop: "50px" }}>Try it Yourself</button><br />
                       {/* <button className='b-[danger] b'>Try it Yourself</button> */}
                    </Card.Body>
                </Card>

            </div>
        </div>

    </div>
  )
}
