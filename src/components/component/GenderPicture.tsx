interface GenderPictureProps {
  gender: string;
}

export default function GenderPicture(props: GenderPictureProps) {
  const { gender } = props;

  return (
    <div className="border-2 border-gray-200 p-8 rounded-md mr-10">
      {gender === "male" && (
        <img src="/img/boy.png" alt="character" className="w-64" />
      )}

      {gender === "female" && (
        <img src="/img/girl.png" alt="character" className="w-64" />
      )}
    </div>
  );
}
