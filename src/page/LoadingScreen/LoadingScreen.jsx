import loadingGif from '../../assets/loading-animation.gif'

const LoadingScreen = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>
        <img className='w-64' src={loadingGif} alt="loading-gif" />
        <p className="text-lg font-semibold text-gray-700">
          Please wait, you're just one step ahead...
        </p>
        </div>
    );
};

export default LoadingScreen;