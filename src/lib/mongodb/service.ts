import { ObjectId } from "mongodb";
import clientPromise from "./init";
import bcrypt from "bcrypt";

const database = process.env.DB_NAME;

// LOGIN
export async function login(data: { email: string }) {
  const client = await clientPromise;
  const userCollection = client.db(database).collection("users");
  const user = await userCollection.findOne({ email: data.email });

  if (user) {
    return user;
  } else {
    return null;
  }
}

// REGISTER
export async function register(data: {
  fullname: string;
  email: string;
  password: string;
  role?: string;
}) {
  const client = await clientPromise;
  const usersCollection = client.db(database).collection("users");
  const existUser = await usersCollection.findOne({ email: data.email });

  if (existUser) {
    return { status: false, statusCode: 400, message: "Email sudah ada." };
  } else {
    data.role = "admin";
    data.password = await bcrypt.hash(data.password, 10);

    try {
      await usersCollection.insertOne(data);
      return { status: true, statusCode: 200, message: "Resgister success." };
    } catch (error) {
      return { status: true, statusCode: 400, message: "Resgister failed." };
    }
  }
}

// GET USER DATA
export async function getUser(userId: string) {
  const client = await clientPromise;
  const userCollection = client.db(database).collection("users");
  const user = await userCollection.findOne({ _id: new ObjectId(userId) });

  if (user) {
    return user;
  } else {
    return null;
  }
}

// ADD POKEMON
export async function addPokemon(data: {
  userId: string;
  id: number;
  name: string;
  image: string;
}) {
  const client = await clientPromise;
  const user = client.db(database).collection("users");
  const existPokemon = await user.findOne({
    _id: new ObjectId(data.userId),
    "pokemons.id": data.id,
  });

  const pokemon = {
    id: data.id,
    name: data.name,
    image: data.image,
  };

  try {
    if (existPokemon) {
      return { status: true, statusCode: 400, message: "Pokemon sudah ada." };
    }

    await user.updateOne(
      { _id: new ObjectId(data.userId) },
      { $push: { pokemons: pokemon } }
    );
    return { status: true, statusCode: 200, message: "Add Pokemon success." };
  } catch (error) {
    return { status: true, statusCode: 400, message: "Add Pokemon failed." };
  }
}

// ADD POKEMON
export async function deletePokemon(data: { userId: string; id: number }) {
  const client = await clientPromise;
  const user = client.db(database).collection("users");
  const existPokemon = await user.findOne({
    _id: new ObjectId(data.userId),
    "pokemons.id": data.id,
  });

  try {
    if (existPokemon) {
      await user.updateOne(
        { _id: new ObjectId(data.userId) },
        { $pull: { pokemons: { id: data.id } } }
      );
      console.log(data.userId, data.id);
    }

    return { status: true, statusCode: 200, message: "Add Pokemon success." };
  } catch (error) {
    return { status: true, statusCode: 400, message: "Add Pokemon failed." };
  }
}
