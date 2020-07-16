import React from "react"
import { Row, Col } from "antd"
import AboutTile from "../../AbouTile"
import { stripTags, domHtml } from "../../../utils/stripTags"
import SEO from "../../Seo"

const pageText = {
  paraOne: `Hello !! My name is Praveen Kumar. I'm a full stack web developer who is
    passionate about various web technologies. I like to experiment with different web
    technologies. I have an experience of nearly 1.5 years working with MERN stack
    and other JavaScript technologies. Building fancy UI's just like this one that your seeing 😅 and writing blogs about tech stacks
    is what Praveen loves to do. Check my blog which I update every week for some Javascript and some 
    cool notes on web technologies.`,
  paraTwo: `Currently I am pusuing my B.Tech in Computer Science from Indian Institute Of Information Technology, Una.
    I mostly work with Javascript technologies like ReactJS and NodeJS. I'm always a learner and a self taught programmer.`,
}
const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={[
            "Praveen",
            "Kumar",
            "IIIT Una",
            "iiitu",
            "IIIT una",
            "FullStack developer",
            "Javascript",
            "ReactJS",
            "NodeJS",
            "Gatsby",
          ]}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>{pageText.paraOne}</p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Born and bought up in"
            textH3="Etah, UP, India"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Love Coffee"
            textH3="Coffee + Me = Happiness"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="Socially Active"
            textH3="All time"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="motorcycle.png"
            alt="motorcycle image"
            textH4="Love Riding"
            textH3="Biker for life"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursuing B.Tech in"
            textH3="Computer Science"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  )
}
export default AboutMe
