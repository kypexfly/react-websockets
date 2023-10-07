const useGetUserStorage = () => {
  return {
    agent: localStorage.getItem('agent'),
    desk: localStorage.getItem('desk'),
  }
};

export default useGetUserStorage;
