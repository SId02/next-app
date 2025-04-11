interface ShowMoreButtonProps {
    onClick: () => void;
  }
  
  const ShowMoreButton = ({ onClick }: ShowMoreButtonProps) => {
    return (
      <button
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Show More
      </button>
    );
  };
  
  export default ShowMoreButton;