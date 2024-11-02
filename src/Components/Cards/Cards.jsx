import "./cards.css"
import Card from 'react-bootstrap/Card';
import WritingPad from '../WritingPad/WritingPad';

function Cards({post}) {
    
  return (
    <Card style={{ width: '18rem' }} className='blogCard'>
      <Card.Img variant="top" className='w-100 h-100'  src={process.env.REACT_APP_API_BASE_URL+"/"+post?.imagePath} />
      <Card.Body>
        <Card.Text>
        <WritingPad value={post.content} readOnly={true} theme={'bubble'}/>
          
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;