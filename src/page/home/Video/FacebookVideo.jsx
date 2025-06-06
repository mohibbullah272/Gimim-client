
const FacebookVideo = () => {
    return (
        <div className="flex justify-center my-28 px-5">
            <iframe 
            src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fgimimcorporation%2Fvideos%2F1075913010830468%2F&show_text=false&width=476&t=0" 
            width="100%"
            style={{ border: 'none', overflow: 'hidden'}}
            height="476" 
            scrolling="no" 
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
            allowFullScreen={true}
            ></iframe>
        </div>
    );
};

export default FacebookVideo;