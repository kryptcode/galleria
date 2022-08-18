const styles = {
    container: 'py-4 px-3 border-b flex justify-between items-center mb-8',
    button: 'text-xs md:text-sm text-gray-600 hover:text-black cursor-pointer tracking-widest',
}

const Nav = () => {
  return (
    <div className={styles.container}>
        <div>
            <img src='https://galleria-slideshow-react.netlify.app/static/media/logo.f8bb14c9.svg' alt="" />
        </div>

        <div className={styles.button}>
            START SLIDESHOW
        </div>
    </div>
  )
}

export default Nav