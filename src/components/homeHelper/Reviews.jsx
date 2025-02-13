// import { useEffect, useRef, useState } from "react";

// const reviews = [
//   {
//     name: "John Doe",
//     img: "https://randomuser.me/api/portraits/men/1.jpg",
//     review:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Ut sit amet.",
//   },
//   {
//     name: "Jane Smith",
//     img: "https://randomuser.me/api/portraits/women/2.jpg",
//     review:
//       "Quisquam pariatur dolorum nostrum sequi fuga, velit eligendi, deleniti vero ad. Soluta, natus.",
//   },
//   {
//     name: "Michael Brown",
//     img: "https://randomuser.me/api/portraits/men/3.jpg",
//     review:
//       "Quibusdam cupiditate omnis deserunt debitis sit quo voluptate hic reprehenderit, architecto saepe nulla.",
//   },
//   {
//     name: "Sarah Williams",
//     img: "https://randomuser.me/api/portraits/women/4.jpg",
//     review:
//       "Adipisci ullam vero laboriosam ex, nobis sed. Similique exercitationem quae ea est praesentium!",
//   },
//   {
//     name: "David Lee",
//     img: "https://randomuser.me/api/portraits/men/4.jpg",
//     review:
//       "Voluptatem rem voluptatibus voluptas, tenetur nihil iure corporis. Libero doloremque veniam quidem quod.",
//   },
//   {
//     name: "Emily Davis",
//     img: "https://randomuser.me/api/portraits/women/5.jpg",
//     review:
//       "Necessitatibus temporibus repudiandae? Accusamus eos, quae explicabo officia velit nihil ipsum dolorum.",
//   },
//   {
//     name: "Chris Evans",
//     img: "https://randomuser.me/api/portraits/men/5.jpg",
//     review:
//       "Mollitia recusandae maiores eveniet deserunt rerum aliquid sint. Impedit laborum voluptate dolorem harum?",
//   },
//   {
//     name: "Laura Johnson",
//     img: "https://randomuser.me/api/portraits/women/6.jpg",
//     review:
//       "Eum deserunt labore, optio quasi dolores accusamus! Ut molestias ratione aliquam id earum dolore.",
//   },
//   {
//     name: "Daniel Lee",
//     img: "https://randomuser.me/api/portraits/men/6.jpg",
//     review:
//       "Ducimus aliquid nobis dolor, aliquam inventore sunt, quae voluptates dolorum. Aliquam expedita harum.",
//   },
//   {
//     name: "Jessica Taylor",
//     img: "https://randomuser.me/api/portraits/women/7.jpg",
//     review:
//       "Amet, dolorum quas cupiditate sequi error, eveniet odio ad voluptatibus. Qui nisi sit consequatur?",
//   },
// ];

function Reviews() {
  // const [position, setPosition] = useState([]);
  // const dimensionRef = useRef();

  // useEffect(() => {
  //   const randomPosition = () => {
  //     const dimensions = dimensionRef.current;
  //     const containerHeight = dimensions.clientHeight;
  //     const containerWidth = dimensions.clientWidth;
  //     const margin = 20;

  //     const newPosition = reviews.map(() => {
  //       const top = Math.floor(
  //         Math.random() * (containerHeight - 100 - margin)
  //       );
  //       const left = Math.floor(
  //         Math.random() * (containerWidth - 100 - margin)
  //       );
  //       return { top, left };
  //     });

  //     setPosition(newPosition);
  //   };

  //   randomPosition();
  // }, []);

  // return (
  //   <section className="reviews-section" ref={dimensionRef}>
  //     {reviews.map((review, i) => (
  //       <div
  //         key={i}
  //         className="review"
  //         style={{
  //           position: "absolute",
  //           top: `${position[i]?.top}px`,
  //           left: `${position[i]?.left}px`,
  //           width: "300px",
  //         }}
  //       >
  //         <div className="review-header">
  //           <h4>{review.name}</h4>
  //           <img src={review.img} alt={review.name} />
  //         </div>
  //         <ul className="rating">
  //           <li>⭐</li>
  //           <li>⭐</li>
  //           <li>⭐</li>
  //           <li>⭐</li>
  //           <li>⭐</li>
  //         </ul>
  //         <p>
  //           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam?
  //         </p>
  //       </div>
  //     ))}
  return (
    <section className="reviews-section">
      {/* <h1>askbfakb</h1> */}
      <div className="review review-one">
        <div className="review-header">
          <h4>John Doe</h4>
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="John Doe"
          />
        </div>
        <ul className="rating">
          <li>⭐</li>
          <li>⭐</li>
          <li>⭐</li>
          <li>⭐</li>
          <li>⭐</li>
        </ul>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam?
        </p>
      </div>
      <div className="review review-two">
        <div className="review-header">
          <h4>Jane Smith</h4>
          <img
            src="https://randomuser.me/api/portraits/women/2.jpg"
            alt="Jane Smith"
          />
        </div>
        <ul className="rating">
          <li>⭐</li>
          <li>⭐</li>
          <li>⭐</li>
          <li>⭐</li>
          <li>⭐</li>
        </ul>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam?
        </p>
      </div>
      <div className="review review-three">
        <div className="review-header">
          <h4>Michael Brown</h4>
          <img
            src="https://randomuser.me/api/portraits/men/3.jpg"
            alt="Michael Brown"
          />
        </div>
        <ul className="rating">
          <li>⭐</li>
          <li>⭐</li>
          <li>⭐</li>
          <li>⭐</li>
          <li>⭐</li>
        </ul>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam?
        </p>
      </div>
      <div className="review review-four">
        <div className="review-header">
          <h4>Sarah Williams</h4>
          <img
            src="https://randomuser.me/api/portraits/women/4.jpg"
            alt="Sarah Williams"
          />
        </div>
        <ul className="rating">
          <li>⭐</li>
          <li>⭐</li>
          <li>⭐</li>
          <li>⭐</li>
          <li>⭐</li>
        </ul>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam?
        </p>
      </div>
      <div className="review review-five">
        <div className="review-header">
          <h4>David Lee</h4>
          <img
            src="https://randomuser.me/api/portraits/men/4.jpg"
            alt="David Lee"
          />
        </div>
        <ul className="rating">
          <li>⭐</li>
          <li>⭐</li>
          <li>⭐</li>
          <li>⭐</li>
          <li>⭐</li>
        </ul>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam?
        </p>
      </div>
      <div className="review review-six">
        <div className="review-header">
          <h4>Linda Johnson</h4>
          <img
            src="https://randomuser.me/api/portraits/women/5.jpg"
            alt="Linda Johnson"
          />
        </div>
        <ul className="rating">
          <li>⭐</li>
          <li>⭐</li>
          <li>⭐</li>
          <li>⭐</li>
          <li>⭐</li>
        </ul>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam?
        </p>
      </div>
      <div className="review review-seven">
        <div className="review-header">
          <h4>James Davis</h4>
          <img
            src="https://randomuser.me/api/portraits/men/5.jpg"
            alt="James Davis"
          />
        </div>
        <ul className="rating">
          <li>⭐</li>
          <li>⭐</li>
          <li>⭐</li>
          <li>⭐</li>
          <li>⭐</li>
        </ul>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam?
        </p>
      </div>
      <div className="review review-eight">
        <div className="review-header">
          <h4>Emily Clark</h4>
          <img
            src="https://randomuser.me/api/portraits/women/6.jpg"
            alt="Emily Clark"
          />
        </div>
        <ul className="rating">
          <li>⭐</li>
          <li>⭐</li>
          <li>⭐</li>
          <li>⭐</li>
          <li>⭐</li>
        </ul>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam?
        </p>
      </div>
      <div className="review review-nine">
        <div className="review-header">
          <h4>William Harris</h4>
          <img
            src="https://randomuser.me/api/portraits/men/6.jpg"
            alt="William Harris"
          />
        </div>
        <ul className="rating">
          <li>⭐</li>
          <li>⭐</li>
          <li>⭐</li>
          <li>⭐</li>
          <li>⭐</li>
        </ul>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam?
        </p>
      </div>
      <div className="review review-ten">
        <div className="review-header">
          <h4>Olivia Martinez</h4>
          <img
            src="https://randomuser.me/api/portraits/women/7.jpg"
            alt="Olivia Martinez"
          />
        </div>
        <ul className="rating">
          <li>⭐</li>
          <li>⭐</li>
          <li>⭐</li>
          <li>⭐</li>
          <li>⭐</li>
        </ul>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam?
        </p>
      </div>
    </section>
  );
}

export default Reviews;
