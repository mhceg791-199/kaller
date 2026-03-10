import "./Map.css";
function Map() {
  return (
    <>
      <div className="my-10">
        <iframe
          className="border-map"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d57368.88464971218!2d-80.1581843!3d26.0153813!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1773142708718!5m2!1sen!2seg"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Map;
