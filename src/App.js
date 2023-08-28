import React from "react";

function Food({ name, picture, rating }) {
  //app에서 보낸 인자를 받아보기
  //{ fav } = props;
  return (
    <div>
      <h2> I like {name} </h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}></img>
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "세상의 모든소리",
    image:
      "https://uyjoqvxyzgvv9714092.cdn.ntruss.com/data2/content/image/2016/09/05/.cache/512/20160905194827.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "강릉커피축제",
    image:
      "https://www.coffeefestival.net/data/banner/2023_poster.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "평창 백일홍 축제제",
    image:
      "https://www.101hongfestival.co.kr/asset/images/popup/pop_230720.jpg",
    rating: 4.5,
  },
  {
    id: 4,
    name: "송어+연어 축제",
    image:
      "http://yyfestival.com/theme/festival/img/sub2_23.jpg",
    rating: 3.8,
  },
];

function renderFood(dish) {
  return (
    <Food
      key={dish.id}
      name={dish.name}
      picture={dish.image}
      rating={dish.rating}
    />
  );
}

function App() {
  return <div>{foodILike.map((dish) => renderFood(dish))}</div>;
}

export default App;
