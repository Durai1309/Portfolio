<template>
<footer class="footer-area">
        <div class="container">
            <div class="">
                <div class="social text-center">
                    <h5 class="text-uppercase">Follow me</h5>
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
                <div class="copyrights text-center">
                    <p class="para">
                        <a href="#"><span style="color: var(--primary-color);">M.Durai Raj</span></a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style>

/* Footer Area */ 

footer.footer-area{
    padding: 5rem 0;
}

footer.footer-area .social h5{
    font: normal 500 23px/ 30px var(--roboto);
}

footer.footer-area .social a > i{
    font-size:22px;
    padding: 2rem;
    color: var(--border-color);
}

footer.footer-area .social a:hover > i{
    color: var(--primary-color);
}


/* End Footer */ 

</style>