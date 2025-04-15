import React from 'react';
import { getInitials } from '../../utils/helper';
import { motion } from 'framer-motion';
import { LogOut } from 'lucide-react';

const ProfileInfo = ({ userInfo, onLogout }) => {
  const fullName = userInfo?.fullName || "User";
  const initials = getInitials(fullName);

  return (
    <motion.div
      className="flex items-center gap-4 p-2 rounded-xl shadow-md bg-slate-800 text-white"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Avatar */}
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-lg font-semibold bg-gradient-to-br from-indigo-400 to-purple-500 shadow-lg">
        {initials}
      </div>

      {/* User Info */}
      <div className="flex flex-col">
        <p className="text-sm font-semibold text-white">{fullName}</p>
        <button
          className="flex items-center gap-1 text-sm text-slate-300 hover:text-red-400 transition-all duration-200 group"
          onClick={onLogout}
        >
          <LogOut size={16} className="group-hover:rotate-[-10deg] group-hover:scale-110 transition-transform" />
          Logout
        </button>
      </div>
    </motion.div>
  );
};

export default ProfileInfo;
