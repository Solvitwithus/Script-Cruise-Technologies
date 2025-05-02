"use client"
import React, { useState } from 'react';
import { TargetSolutionsCard } from '@/components/targetsolutionscard';

const Page = () => {
  // Default to Banks item
  const [selectedItem, setSelectedItem] = useState(
    TargetSolutionsCard.find(item => item.name === "Banks")
  );

  return (
    <div className='text-[#eeeeee]'>
      <div className='flex flex-col items-center mt-10'>
        <h3 className='text-white text-2xl font-medium mt-9 mb-4'>Industry-Specific Solutions</h3>
        <p className='opacity-45 text-sm tracking-wide'>
          Tailored solutions designed to address the unique challenges of various industries across East<br />
          Africa
        </p>
      </div>

      <div className='flex justify-center my-3 gap-3 flex-wrap'>
        {TargetSolutionsCard.map((val, idx) => {
          const Icon = val.icon;
          const isSelected = selectedItem?.name === val.name;

          return (
            <div
              key={idx}
              onClick={() => setSelectedItem(val)}
              className={`cursor-pointer flex flex-wrap gap-2 border-[#bdb9b9cb] border-[1px] px-3 py-0.5 rounded-sm text-sm tracking-wide  items-center ${
                isSelected ? 'text-[#F8931F]' : 'opacity-65'
              }`}
            >
              <Icon />
              <span>{val.name}</span>
            </div>
          );
        })}
      </div>
    
      <div className="mt-13 px-6">
        {selectedItem && (
          <div className="text-sm opacity-80 flex">
            <div className=' flex-col'>
            <h3 className="text-lg font-semibold mb-1 text-[#22C55E] my-4">{selectedItem.title}</h3>
            <p className="mb-3 text-lg max-w-2/3 my-3">{selectedItem.description}</p>
            <ul className="list-disc list-inside space-y-1">
              <li className='my-2'>{selectedItem.eins}</li>
              <li className='my-2'>{selectedItem.zwei}</li>
              <li className='my-2'>{selectedItem.drei}</li>
              <li className='my-2'>{selectedItem.vier}</li>
            </ul>
            </div>
            <div>
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="mt-4 rounded-md w-full max-w-md h-fit"
            />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
