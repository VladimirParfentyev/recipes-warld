import {useNavigate} from 'react-router-dom';
import MyButton from './UI/button/MyButton'
const CategoryCard = (props) => {
    const {strCategory, strCategoryThumb, strCategoryDescription} = props;

    const router = useNavigate()

    return (
        <div className="col-12 col-md-4 col-lg-3 ">       
            <div className="card h-100 border-primary mb-3 text-center">
                <img className="card-img-top" src={strCategoryThumb} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
                        {strCategory}
                    </h5>
                    <p className="card-text">{strCategoryDescription.slice(0, 90)}...</p>
                </div>
                    <MyButton
                        type="button"
                        className="btn btn-primary"
                        onClick={() => router(`/category/${strCategory}`)}>
                        View recipes
                    </MyButton>
            </div>
        </div>
    );
}
export default CategoryCard