import React from "react";

const userCount = (countParam) => {
  const [count, setCount] = React.useState(countParam);
  // const count = 0;
  const sumCount = () => {
    setCount(count + 1);
  };

  return { count, sumCount };
};

function Count() {
  const { count, sumCount } = userCount(0);
  return (
    <>
      <div className="col">
        <div className="row justify-content-center align-items-center text-center">
          <div
            className="btn btn-success col-4 m-0 p-2 mb-3"
            onClick={sumCount}
          >
            Count: {count}
          </div>
        </div>
      </div>
    </>
  );
}

export default Count;
