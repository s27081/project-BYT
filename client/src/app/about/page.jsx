import styles from '../../styles/aboutPage.module.css';
import Image from 'next/image'
import pylingo from "../../../public/pylingo.png"
import Header from '../../Components/Header';

const users = [
  { name: "Darrell Steward", email: "tanya.hill@example.com", img: "https://via.placeholder.com/120x120" },
  { name: "Jacob Jones", email: "nevaeh.simmons@example.com", img: "https://via.placeholder.com/120x120" },
  { name: "Jane Cooper", email: "willie.jennings@example.com", img: "https://via.placeholder.com/120x120" },
  { name: "Guy Hawkins", email: "kenzi.lawson@example.com", img: "https://via.placeholder.com/120x120" },
  { name: "Dianne Russell", email: "felicia.reid@example.com", img: "https://via.placeholder.com/120x120" }
];

const UserCard = ({ name, email, img }) => (
  <div className="userInfo">
    <img src={img} alt={name} className="userImage" />
    <div className="userName">{name}</div>
    <div className="userEmail">{email}</div>
  </div>
);

export default function about(){
  return (
    <>
    <Header />
    <div className={styles.rootContainer}>
      <div className={styles.backgroundGradient}></div>
      <div className={styles.title}>Meet Us!</div>
      <div className={styles.userContainer}>
        {users.map((user, index) => (
          <UserCard key={index} name={user.name} email={user.email} img={user.img} />
        ))}
      </div>
      <Image
        className={styles.layoutImage}
        src={pylingo}
        width={232}
        height={203}
        alt="Pylingo illustration"
      />
    </div>
      </>
    );
}