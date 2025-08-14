

function UserProfile() {
  return (
    <div className="
      bg-gray-100 
      sm:p-4 sm:p-6 md:p-8 
      max-w-xs sm:max-w-md md:max-w-sm md:text-xl
      mx-auto 
      my-10 sm:my-16 md:my-20 
      rounded-lg 
      shadow-lg
      hover:text-blue-500
      hover:shadow-xl          
      transition-shadow        
      duration-300
    ">
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="
          rounded-full 
          w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 
          mx-auto
        hover:scale-110      
          transition-transform 
          duration-300 
          ease-in-out
        "
      />
      <h1 className="
        text-lg sm:text-xl md:text-2xl 
        text-blue-800 
        my-3 sm:my-4 md:my-5
        transition-colors     
        duration-200
      ">
        John Doe
      </h1>
      <p className="
        text-sm sm:text-base 
        text-gray-600
      ">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
