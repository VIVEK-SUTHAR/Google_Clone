import React from 'react'
import './SearchPage.css'
import { useStateValue } from "./StateProvider"
import useGoogleSearch from "./GoogleSearch";
import { Link } from 'react-router-dom';
import Search from './pages/Search';
import { Description, ImageAspectRatio, LocalOfferRounded, MoreVertRounded, RoomRounded, SearchOutlined } from '@mui/icons-material';

const SearchPage = () => {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);
    // console.log(data);
    // const data = response;
    return (
        <div className='searchPage'>
            <div className='searchPage_header'>
                <Link to="/">
                    <img className='searchPage_logo' src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt=''></img>
                </Link>
                <div className="searchPage_headerBody">
                    <Search hideButton />
                    <div className="searchPage_Options">
                        <div className="searchPage_OptionsLeft">
                            <div className="searchPage_option">
                                <SearchOutlined />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage_option">
                                <Description />
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchPage_option">
                                <ImageAspectRatio />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchPage_option">
                                <LocalOfferRounded />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="searchPage_option">
                                <RoomRounded />
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className="searchPage_option">
                                <MoreVertRounded />
                                <Link to="/more">More</Link>
                            </div>

                        </div>
                        <div className="searchPage_OptionsRight">
                            <div className="searchPage_option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPage_option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {
                true && (
                    <div className="searchPage_results">
                        <p className="searchPage_resultCount">
                            About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}) for  {term}
                        </p>
                        {
                            data?.items.map(item => (
                                <div
                                    className='searchPage_result'>
                                    <a href={item.link}>
                                        {item.pagemap?.cse_image?.length > 0 ? item.pagemap?.cse_image[0]?.src &&
                                            (
                                                <img
                                                    className='searchPage_resultImage'
                                                    src={item.pagemap?.cse_image[0]?.src} alt="" />
                                            ) :
                                            "0"}
                                        {item.displayLink}
                                    </a>
                                    <a href={item.link} className="searchPage_resultTitle">
                                        <h2>{item.title}</h2>
                                    </a>
                                    <p className="searchPage_resultSnippet">
                                        {item.snippet}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                )
            }

        </div>
    )
}

export default SearchPage