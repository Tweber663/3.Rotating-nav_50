type domElements = {
    openBtn: HTMLButtonElement;
    closeBtn: HTMLButtonElement;
    container: HTMLDivElement, 
}

class AnimationBase {
    dom: domElements;

    constructor(container: HTMLDivElement) {
     this.dom = {} as domElements; 
     this.getElements(container);
     this.open(); 
     this.close(); 
    }

    getElements(container: HTMLDivElement) {
        console.log('working')
        this.dom  = {
           openBtn:  container.querySelector('#open') as HTMLButtonElement, 
           closeBtn: container.querySelector('#close') as HTMLButtonElement, 
           container, 
        }
    }

    open() {
        this.dom.openBtn.addEventListener('click', () => {
            this.dom.container.classList.add('nav-active');
        })
    }
    
    close() {
        this.dom.closeBtn.addEventListener('click', () => {
            this.dom.container.classList.remove('nav-active');
        })
    }
}


export default AnimationBase; 