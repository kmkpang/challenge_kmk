import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import CardMenu from './component/CardMenu';

// image
import photo from'./assets/image/photo.svg';
import buttonPhoto from'./assets/image/Button.svg';
import user from'./assets/image/user.svg';
import Divider from './component/Divider';
import Button from './component/Button';

function App() {
  
  const [imageURL, setImageURL] = useState('https://s3-alpha-sig.figma.com/img/0fde/dea6/980c6e0e0777fe938adf17d5baf26325?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ah47Eio-pTM0AbeQLjTFNg6f5gNNT8xu7H300xgTg4aBHhlLyGGPuixoOSOmK9Ljb5BWS6ZWDYPU4x9bUM03PlKv6IwxOyes-E0mngPyCJIeLV3X6zI6pJpr8tmK17I1u8ZTI0GcfeuEKvBBxHmh0Uvb4h0jTJtgTZ-8Nuq~5ZolgA00uc5saotiS5V42NMRbM5RTNDP~looSy9Mmh-IAnhp9x3ThAX-t5V5ZIi27luTybs0RUraJTpF4et4tLFEaDkxKP~uyaLTkSDFA3~dg9K5ZtHNBFV6~GryC7VLV0E7lyo9mnC5IADtQHw6PfB1fgiriT4GIajwF9fH7qi~tw__')

  return (
    <div className="">
      <Navbar/>
      <main className='px-8 py-8'>
        <CardMenu />
        <div className="ml-4 sm:ml-[340px]">
          <div className='text-[28px] font-bold'>
            Account
          </div>
          <div className='text-[16px] text-[#757575]'>
            Edit account details and preferences
          </div>
          <div className='text-[20px] font-bold mt-8 mb-6'>
            General
          </div>
          <div className='my-4'>
            <li className="flex gap-x-6">
              <div className="flex items-center min-w-0 gap-x-4">
                <img className="h-5 w-5" src={photo} alt=""/>
                <div className="min-w-0 flex-auto">
                  <p className="text-base">Cover Photo</p>
                  <p className="mt-1 text-sm text-[#757575]">Recommended size: 1500x400px</p>
                </div>
              </div>
            </li>
            <div className="flex items-center justify-center w-full mt-4 mb-2">
              <div className="relative h-[200px] w-full rounded-lg cursor-pointer">
                <img className='h-full w-full max-w-full rounded-lg object-cover' src={imageURL} alt='imageURL' />
                <label htmlFor="dropzone-file"  className="absolute right-4 bottom-4">
                  <img src={buttonPhoto} alt='buttonPhoto' />
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>
          </div>
          <Divider/>
          <div className='my-4'>
            <li className="flex justify-between gap-x-6">
              <div className="flex items-center min-w-0 gap-x-4">
                <img className="h-5 w-5" src={user} alt=""/>
                <div className="min-w-0 flex-auto">
                  <p className="text-base">Name</p>
                  <p className="mt-1 text-sm text-[#757575]">Jon Snow</p>
                </div>
              </div>
              <div className="shrink-0 sm:flex sm:flex-col sm:items-end justify-center">
                <Button color='#EEEEEE' text='Edit' textColor='#212121' />
              </div>
            </li>
          </div>
          <Divider/>
          <div className='text-[20px] font-bold mt-8 mb-6'>
            Verification
          </div>
          <div className='my-4'>
            <li className="flex justify-between gap-x-6">
              <div className="flex items-center min-w-0 gap-x-4">
                <img className="h-5 w-5" src={user} alt=""/>
                <div className="min-w-0 flex-auto">
                  <p className="text-base">Name</p>
                  <p className="mt-1 text-sm text-[#757575]">Jon Snow</p>
                </div>
              </div>
              <div className="shrink-0 sm:flex sm:flex-col sm:items-end justify-center">
                <Button color='#FFF3E0' text='Verify Now' textColor='#E65100' border='#E65100' />
              </div>
            </li>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
