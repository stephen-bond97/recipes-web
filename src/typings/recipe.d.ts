interface Recipe {
    Id?: string;
    Title: string;
    Description: string;
    Ingredients?: string;
    Steps: Step[];
    Serves?: string;
    PrepTime?: string;
    CreatedOn?: Date;
    LastModified?: Date;
  }

  interface Step {
    Index: number;
    Content: string;
  }