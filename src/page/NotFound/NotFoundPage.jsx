import { ArrowLeft, Home } from 'lucide-react';
import { useState, useEffect } from 'react';

const NotFoundPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center justify-center px-4">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-20 w-32 h-32 bg-orange-100 rounded-full opacity-40 animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-48 h-48 bg-yellow-100 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-10 w-24 h-24 bg-orange-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className={`relative z-10 text-center max-w-2xl mx-auto transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
                {/* 404 Number */}
                <div className="mb-8">
                    <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 animate-pulse">
                        404
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Error Message */}
                <div className={`mb-12 transition-all duration-1000 delay-300 transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto">
                        The page you're looking for doesn't exist or has been moved to another location.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-500 transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                    <button 
                        className="group bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                        onClick={() => window.location.href = '/'}
                    >
                        <Home className="w-5 h-5 group-hover:animate-bounce" />
                        Go to Homepage
                    </button>
                    
                    <button 
                        className="group bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl border border-gray-200 transform transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                        onClick={() => window.history.back()}
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:animate-bounce" />
                        Go Back
                    </button>
                </div>
            </div>

            {/* Custom styles for smoother animations */}
            <style jsx>{`
                @keyframes slideUp {
                    from { 
                        opacity: 0; 
                        transform: translateY(30px); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0); 
                    }
                }
            `}</style>
        </div>
    );
};

export default NotFoundPage;