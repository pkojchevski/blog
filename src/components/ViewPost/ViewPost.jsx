import React, { useEffect, useState, Fragment } from 'react'
import classes from './ViewPost.module.css'

import { Container, Row, Col } from 'react-bootstrap';
import LatestPosts from '../landing/LatestPosts/LatestPosts';
import axios from 'axios';
import parse from 'html-react-parser';
import Loader from '../loader/Loader'

function ViewPost(props) {
	
	const [title, setTitle] = useState();
	const [content, setContent] = useState();
	const [banner, setBanner] = useState();
	const [cate, setCate] = useState();
	const [author, setAuthor] = useState();
	
    const [data, setData] = useState({ hits: [] });
    const [loading, setLoading] = useState(false)
	
	let post_id = props.match.params.id;
	
	// axios.get('https://oneplanetrating.org/blog/apis/get-post.php?id='+post_id)
	// .then(function (response) {
	//   console.log(response.data.hitss[0]);
	//   setTitle(response.data.hitss[0].post_title);
	//   setContent(parse(response.data.hitss[0].post_content));
	//   setBanner(response.data.hitss[0].feature_image);
	//   setCate(response.data.hitss[0].cate_slug);
	  
 
	// 	let category_slug = response.data.hitss[0].cate_slug;

	// 	axios.get('https://oneplanetrating.org/blog/apis/related-posts.php?related_name='+category_slug)
	// 	.then(function (response) {
	// 	  // console.log(response.data.hitss[0]);
	// 	  setData(response.data);
	// 	})
	  
	  
	// })

	  useEffect(() => {

          async function loadPost(id) {
            setLoading(true)
            const response = await axios.get('https://oneplanetrating.org/blog/apis/get-post.php?id='+id)
            console.log(response.data.hitss[0])
            setTitle(response.data.hitss[0].post_title);
            setContent(parse(response.data.hitss[0].post_content));
            setBanner(response.data.hitss[0].feature_image);
            setCate(response.data.hitss[0].cate_slug);
            setAuthor(response.data.hitss[0].author_name);
            let category_slug = response.data.hitss[0].cate_slug;
            setLoading(false)

            const res = await 
                axios.get('https://oneplanetrating.org/blog/apis/related-posts.php?related_name='+category_slug)
                  setData(res.data);
          }

          loadPost(post_id);
	  },[]);
	
    return (
        <Fragment>
           {!loading ?
            (<Container style={{ maxWidth: '100vw', background: '#F5F5F5', position: 'relative', padding: '2rem' }} fluid>
                <Row style={{ marginTop: '3rem' }}>
                    <Col>
                        {/* <div className={classes.PostImage1}>
                            <img src={banner} alt="post image" />
                            <div className={classes.Hash}>#</div>
                        </div>  */}
                        {/* <SocialIcons facebook={'#3C5A99'} twitter={'#33CCFF'} instagram={"transparent linear-gradient(50deg, #FBE18A 0%, #FCBB45 21%, #F75274 38%, #D53692 52%, #8F39CE 74%, #5B4FE9 100%) 0% 0% no-repeat padding-box"}
                        /> */}
                        {/* <SocialIcons color={"#024345"}/> */}
                    </Col>
                    <Col className="col-md-12">
						<div className="container single-custom-content">
							<div className={classes.PostTextWrapper1}>
								<h3 className={classes.PostTitle}>{title}</h3>
								<div className={classes.PostSubTitle} style={{padding: '0px',marginBottom: '-30px'}}>
									<p className={classes.PostFeature}>{cate}</p>
									<p className={classes.PostAuthor}>By {author}</p>
								</div>
								<div>
									<Row>
									<div>{ content }</div>
									</Row>
									{/* {content && content.split('\n').map((item, i) => <p className={classes.PostText} key={i}>{item}</p>)} */}
							  
								</div>
							</div>
                        </div>
                    </Col>
                </Row>
                {/* <Row style={{ marginTop: '3rem' }}>
                    <Col>       {post.text.split('\n').map((item, i) => <p className={classes.PostText2} key={i}>{item}</p>)}</Col>
                    <Col>
                        <div className={classes.PostImage2}>
                            <img src={MidsomerImage} alt="midsomer2"></img>
                        </div>

                    </Col>
                </Row>
                <Row style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                    <Col>
                        <div className={classes.PostImage3}>
                            <img src={MidsomerImage} alt="midsomer3" />
                        </div>
                    </Col>
                    <Col>
                        {post.text.split('\n').map((item, i) => <p className={classes.PostText3} key={i}>{item}</p>)}
                    </Col>
                </Row> */}
            </Container> )
            : <Container style={{ width: '100vw', height:'500px', background: '#F5F5F5', position: 'relative', padding: '2rem' }} fluid>
                {/* <Row>
                    <Col style={{justifyContent:'center', alignItems:'center'}}> */}
                    
                    <Loader/>
                    {/* </Col>
                </Row> */}
            </Container>
            }


            <div className={classes.RelatedPostsWrapper}>
                <div className={classes.RelatedPosts}>
                    <h3 className={classes.RPTitle}>Related Articles</h3>
                    <LatestPosts className={classes.LatestPostsList} posts={data.hits} last={true} />
                </div>
            </div>
        </Fragment>
    )
}

export default ViewPost
