import { ReactElement, useRef, useState } from "react";
import { axiosInstance } from '../utils/axios';
import ListView from '../component/ListView/ListView';
import './Dashboard.scss';
const PER_PAGE = 30;

const Dashboard = (): ReactElement => {
    const [listData, setListData] = useState<any | undefined>();
    const [currentPage = 1 , setCurrentPage] = useState<any | undefined>();
    const textInput = useRef<HTMLInputElement>(null);
    
    const onClickMethod = async (page=1) => {
        try {
            setCurrentPage(page);
            const data: any = await axiosInstance.get(`https://api.github.com/search/repositories?q=org:${textInput?.current?.value}&sort=stars&page=${page}&per_page=${PER_PAGE}`);
            setListData(data?.data);
        } catch(e) {
            console.error('Error occurred', e);
            setListData(null);
        }
        
    }
    const totalResults = (listData?.total_count || 0);
    const numberOfPages = Math.round(totalResults / PER_PAGE);
    
    return <div key="dashboard-container" className="dashboard-container">
        <div className="search-panel">
                <header>Git repositories by stars</header>
                <input type="text" placeholder="search" ref={textInput} onKeyPress={(e) => { e.key === 'Enter' && onClickMethod() } } />
                <button onClick={() => onClickMethod}>search</button>
                
        </div>
            {listData?.items && <>
                <div className="total-count" key="total-count">Total Repositories ({totalResults})</div>
                <div className="pagination">
                <a href="javascript:void(0)" className={ currentPage === 1 ? "hide-link" : ''} onClick={() => { onClickMethod(currentPage-1 < 1 ? 1 : currentPage-1) }}> prev </a>
                <a href="javascript:void(0)" className={ currentPage === numberOfPages ? "hide-link" : ''} onClick={() => { onClickMethod(currentPage+1 > numberOfPages ? numberOfPages : currentPage+1) }}> next </a>
                </div></>}
                
                <ListView data={listData?.items || []} />
            </div>
}

export default Dashboard;


