import styles from '@/app/location/Maps.module.css'; 

const SearchLocation: React.FC = () => {
  return (
    <div className={styles.maps}>
      <div className={styles.container}>
       <iframe title="haora"  src="https://app.powerbi.com/view?r=eyJrIjoiNGFmYWE3NzgtNTBhZS00NDliLTllNDEtYjdkOWM0OGUxOWVjIiwidCI6IjExZGJiZmUyLTg5YjgtNDU0OS1iZTEwLWNlYzM2NGU1OTU1MSIsImMiOjR9"></iframe>
      </div>
    </div>
  );
};

export default SearchLocation;
