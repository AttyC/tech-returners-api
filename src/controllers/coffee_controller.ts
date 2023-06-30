import { Request, Response } from "express";
import * as coffeeService from "../services/coffee_service";

// Controllers - Maps a route to the business logic. Controllers understand how to get
// the right data from a Request and what to put in a Response. But they don’t know
// anything about the actual application logic! That is the job of...[services]

export const getCoffee = async (
  req: Request<object, object, object, { coffeeName: string | undefined }>,
  res: Response
) => {
  const { coffeeName } = req.query;
  const coffee = coffeeService.getCoffee(coffeeName);
  res.json(coffee).status(200);
};
