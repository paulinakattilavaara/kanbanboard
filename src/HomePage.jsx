import Column from "./Column";

const HomePage = () => {

  return (
    <main>
      <Column title="Todo" id={1} />
      <Column title="Doing" id={2} />
      <Column title="Done" id={3} />
    </main>
  );
};

export default HomePage;
