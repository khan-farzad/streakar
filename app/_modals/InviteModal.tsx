import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import useInviteModal from "../_hooks/useInviteModal";

const InviteModal = ({
  bro,
  setBro,
}: {
  bro: { username: string; avatar: number };
  setBro: Dispatch<
    SetStateAction<{
      username: string;
      avatar: number;
    }>
  >;
}) => {
  const [users, setUsers] = useState<any[]>([]);
  const [query, setQuery] = useState<string>("");
  const bros = [
    {
      avatar: 4,
      username: "Puj",
      fullName: "Pulkit Jain",
    },
    {
      avatar: 7,
      username: "Atif",
      fullName: "Atif Khan",
    },
    {
      avatar: 10,
      fullName: "John DOe",
      username: "John",
    },
  ];
  const getUsers = async () => {
    try {
      const users = await fetch("/api/users");
      const data = await users.json();
      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  const inviteModal = useInviteModal();

  const filteredUser =
    users.length > 0
      ? users.filter((user) =>
          user.username.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  const handleInvite = (user: any) => {
    inviteModal.OnClose();
    setBro({ username: user.username, avatar: user.avatar });
  };
  if (!inviteModal.isOpen) return null;
  return (
    <div
      onClick={inviteModal.OnClose}
      className="absolute border border-gray-500 z-[100] flex-center inset-0 backdrop-blur-[2px] h-full rounded-xl shadow-lg"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="h-2/3 w-2/5 bg-white flex flex-col p-4 gap-4 rounded-xl"
      >
        <div className="flex justify-between gap-10">
          <div className="flex gap-2 flex-col">
            <h4 className="text-3xl font-semibold">Invite your buddy</h4>
            <p className="font-light">
              You can invite your buddy to motivate each other and stay on track
              with your habits.{" "}
            </p>
          </div>
          <div className="bg-white rounded-full size-6 flex-center">
            <IoIosClose size={28} />
          </div>
        </div>
        <div className="flex justify-between gap-0">
          <div className="rounded-xl border-2 border-r-0 grow border-gray-500 h-10 rounded-r-none p-1">
            <input
              onChange={(e) => setQuery(e.target.value)}
              className="outline-none w-full h-full"
              value={query}
            />
          </div>
          <button className="px-2 py-1 border-2 rounded-l-none rounded-xl border-gray-500">
            Invite
          </button>
        </div>
        <div className="flex justify-between text-gray-600 gap-2 items-center">
          <div className="bg-gray-500 w-1/3 h-0.5"></div>
          <div>Invite Buddies</div>
          <div className="bg-gray-500 w-1/3 h-0.5"></div>
        </div>
        <div className="flex flex-col gap-2 h-96 pr-3 overflow-auto">
          {filteredUser.map((user, idx) => (
            <div key={idx} className="flex justify-between">
              <div className="flex items-center">
                <Image
                  src={`/avatar${user.avatar}.png`}
                  alt="avatar"
                  height={50}
                  width={50}
                />
                <div className="ml-3 flex flex-col gap-2">
                  <p>{user.username}</p>
                </div>
              </div>
              <button onClick={() => handleInvite(user)}>Invite</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InviteModal;
