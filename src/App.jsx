import './App.css';
import {Menu} from "./menu/Menu";
import {useState} from "react";

const App = () => {

    const items = [
        {value: "Main", href: '/main', icon: "anchor"},
        {value: "Services", href: '/services', icon: "api"},
        {value: "The Shop", href: '/shop', icon: "shopping_bag"},
        {value: "About", href: '/about', icon: "skateboarding"},
    ]

    const [menuActive, setMenuActive] = useState(false)

    return (
        <div className='app'>
            <nav>
                <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
                    <span/>
                </div>
            </nav>
            <main>
                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid autem consequatur consequuntur distinctio dolorem doloremque enim, esse facere in, laborum libero molestiae nemo nihil quidem quo quod sit soluta.</span><span>A ad animi architecto aspernatur consectetur, consequatur delectus ducimus excepturi facilis in iusto laborum minima molestiae nam nemo nihil odit omnis pariatur possimus quae quod similique ut velit vitae voluptatem.</span><span>Debitis dolorum explicabo molestias pariatur quam, soluta totam? Blanditiis doloremque eaque eos esse iusto, nam nulla praesentium quam quos repellat sunt, tempora ullam vel! Accusamus ad asperiores in quasi vel!</span><span>Alias deserunt distinctio eaque fugit hic id, illo illum impedit labore magni maiores possimus repellat, rerum sed, similique. A adipisci amet commodi consequatur cum distinctio minima, officia placeat quisquam velit.</span><span>Blanditiis debitis doloremque dolores enim odit qui quis, quod temporibus. A ad aliquam delectus, distinctio eligendi eum inventore itaque modi nesciunt nobis nostrum officiis perferendis repellat reprehenderit sint sit, veniam.</span>
                </p>
                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid autem consequatur consequuntur distinctio dolorem doloremque enim, esse facere in, laborum libero molestiae nemo nihil quidem quo quod sit soluta.</span><span>A ad animi architecto aspernatur consectetur, consequatur delectus ducimus excepturi facilis in iusto laborum minima molestiae nam nemo nihil odit omnis pariatur possimus quae quod similique ut velit vitae voluptatem.</span><span>Debitis dolorum explicabo molestias pariatur quam, soluta totam? Blanditiis doloremque eaque eos esse iusto, nam nulla praesentium quam quos repellat sunt, tempora ullam vel! Accusamus ad asperiores in quasi vel!</span><span>Alias deserunt distinctio eaque fugit hic id, illo illum impedit labore magni maiores possimus repellat, rerum sed, similique. A adipisci amet commodi consequatur cum distinctio minima, officia placeat quisquam velit.</span><span>Blanditiis debitis doloremque dolores enim odit qui quis, quod temporibus. A ad aliquam delectus, distinctio eligendi eum inventore itaque modi nesciunt nobis nostrum officiis perferendis repellat reprehenderit sint sit, veniam.</span>
                </p>
                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid autem consequatur consequuntur distinctio dolorem doloremque enim, esse facere in, laborum libero molestiae nemo nihil quidem quo quod sit soluta.</span><span>A ad animi architecto aspernatur consectetur, consequatur delectus ducimus excepturi facilis in iusto laborum minima molestiae nam nemo nihil odit omnis pariatur possimus quae quod similique ut velit vitae voluptatem.</span><span>Debitis dolorum explicabo molestias pariatur quam, soluta totam? Blanditiis doloremque eaque eos esse iusto, nam nulla praesentium quam quos repellat sunt, tempora ullam vel! Accusamus ad asperiores in quasi vel!</span><span>Alias deserunt distinctio eaque fugit hic id, illo illum impedit labore magni maiores possimus repellat, rerum sed, similique. A adipisci amet commodi consequatur cum distinctio minima, officia placeat quisquam velit.</span><span>Blanditiis debitis doloremque dolores enim odit qui quis, quod temporibus. A ad aliquam delectus, distinctio eligendi eum inventore itaque modi nesciunt nobis nostrum officiis perferendis repellat reprehenderit sint sit, veniam.</span>
                </p>
                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid autem consequatur consequuntur distinctio dolorem doloremque enim, esse facere in, laborum libero molestiae nemo nihil quidem quo quod sit soluta.</span><span>A ad animi architecto aspernatur consectetur, consequatur delectus ducimus excepturi facilis in iusto laborum minima molestiae nam nemo nihil odit omnis pariatur possimus quae quod similique ut velit vitae voluptatem.</span><span>Debitis dolorum explicabo molestias pariatur quam, soluta totam? Blanditiis doloremque eaque eos esse iusto, nam nulla praesentium quam quos repellat sunt, tempora ullam vel! Accusamus ad asperiores in quasi vel!</span><span>Alias deserunt distinctio eaque fugit hic id, illo illum impedit labore magni maiores possimus repellat, rerum sed, similique. A adipisci amet commodi consequatur cum distinctio minima, officia placeat quisquam velit.</span><span>Blanditiis debitis doloremque dolores enim odit qui quis, quod temporibus. A ad aliquam delectus, distinctio eligendi eum inventore itaque modi nesciunt nobis nostrum officiis perferendis repellat reprehenderit sint sit, veniam.</span>
                </p>
                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid autem consequatur consequuntur distinctio dolorem doloremque enim, esse facere in, laborum libero molestiae nemo nihil quidem quo quod sit soluta.</span><span>A ad animi architecto aspernatur consectetur, consequatur delectus ducimus excepturi facilis in iusto laborum minima molestiae nam nemo nihil odit omnis pariatur possimus quae quod similique ut velit vitae voluptatem.</span><span>Debitis dolorum explicabo molestias pariatur quam, soluta totam? Blanditiis doloremque eaque eos esse iusto, nam nulla praesentium quam quos repellat sunt, tempora ullam vel! Accusamus ad asperiores in quasi vel!</span><span>Alias deserunt distinctio eaque fugit hic id, illo illum impedit labore magni maiores possimus repellat, rerum sed, similique. A adipisci amet commodi consequatur cum distinctio minima, officia placeat quisquam velit.</span><span>Blanditiis debitis doloremque dolores enim odit qui quis, quod temporibus. A ad aliquam delectus, distinctio eligendi eum inventore itaque modi nesciunt nobis nostrum officiis perferendis repellat reprehenderit sint sit, veniam.</span>
                </p>
            </main>
            <Menu active={menuActive} setActive={setMenuActive} header={'Burger menu'} items={items}/>
        </div>
    )
}

export default App;
