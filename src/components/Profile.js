function Profile() {
  return (
    <section className="User">
      <section className="user-content">
        <h3>Hi, I'm</h3>
        <h1>Manisha Singh</h1>
        <h2>Frontend Developer</h2>
        <p>
          I design and build beautiful, responsive websites using HTML, CSS,
          JavaScript &amp; React.
        </p>
        <a href="./CV/SinghManisha_Resume.pdf" className="user-button">
          Hire me
        </a>
      </section>
      <section className="user-image">
        {/* <!-- <img src="./images/user_img.png" alt="sample" /> --> */}
        <img src="./images/user_profile.png" download="My-CV" alt="sample" />
      </section>
    </section>
  );
}
export default Profile;
